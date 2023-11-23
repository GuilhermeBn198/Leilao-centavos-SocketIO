const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
// imports

const app = express();
app.use(express.json());

const server = http.createServer(app);
const io = socketIo(server);
// declaração das variaveis do servidor

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
// usando variaveis de ambiente

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// instanciando a conexão com o servidor

//rest api
app.post("/users/login", async (req, res) => {
    //login
    try {
        const { email, password } = req.body;
        const { user, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            throw error;
        }
        return res
            .status(200)
            .send({ message: "usuário foi conectado!", user });
    } catch (error) {
        return res.status(400).send("Failed to log in");
    }
});

app.post("/users/signup", async (req, res) => {
    // sign up
    try {
        const { name_user, cpf, password, email} = req.body;
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name_user,
                    cpf,
                    cent_numbers: 10,
                },
            },
        });

        if (error) {
            throw error;
        }

        return res
            .status(200)
            .send({ message: "Successfully signed up", data });
    } catch (error) {}
    return res.status(500).send("Failed to create user");
});

app.post("/users/forgot_password", async (req, res) => {});

app.get("/items", async (req, res) => {
    //get
    try {
        const { data, error } = await supabase.from("user_produtos").select(`
            id, 
            name, 
            valor, 
            image, 
            descricao,
            raw_user_meta_data->name_user
        `);
        if (error) {
            throw error;
        }
        return res
            .status(200)
            .send({ message: "Successfully gathered items", data });
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).send("Failed to fetch user");
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//socket api
io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    socket.on("chat message", async (msg) => {
        const { data, error } = await supabase
            .from("messages")
            .insert([{ message: msg }]);

        if (error) {
            console.error("Error inserting message:", error);
        } else {
            io.emit("chat message", msg);
        }
    });
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});
