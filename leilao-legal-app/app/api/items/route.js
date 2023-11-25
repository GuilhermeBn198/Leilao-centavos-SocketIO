import { Server } from "socket.io"
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const io = new Server(server, {
    cors: {
        origin
    }
});

export default function SoketHandler(req, res) {
    if (res.socket.server.io) {
        console.log("socket is already running");
    } else {
        console.log("socket is initializing")
        const io = new Server(res.socket.server)
        res.socket.server.io = io;
    }   
}


// declaração das variaveis do servidor

// usando variaveis de ambiente


// //rest api
// app.post("/users/login", async (req, res) => {
//     //login
//     try {
//         const { email, password } = req.body;
//         const { user, error } = await supabase.auth.signInWithPassword({
//             email,
//             password,
//         });

//         if (error) {
//             throw error;
//         }
//         return res
//             .status(200)
//             .send({ message: "usuário foi conectado!", user });
//     } catch (error) {
//         return res.status(400).send("Failed to log in");
//     }
// });

// app.post("/users/signup", async (req, res) => {
//     // sign up
//     try {
//         const { name_user, cpf, password, email } = req.body;
//         const { data, error } = await supabase.auth.signUp({
//             email: email,
//             password: password,
//             options: {
//                 data: {
//                     name_user,
//                     cpf,
//                     cent_numbers: 10,
//                 },
//             },
//         });

//         if (error) {
//             throw error;
//         }

//         return res
//             .status(200)
//             .send({ message: "Successfully signed up", data });
//     } catch (error) {}
//     return res.status(500).send("Failed to create user");
// });

// app.get("/items", async (req, res) => {
//     //get
//     try {
//         const { data, error } = await supabase.from("user_produtos").select(`
//             id, 
//             name, 
//             valor, 
//             image, 
//             descricao,
//             raw_user_meta_data->name_user
//         `);
//         if (error) {
//             throw error;
//         }
//         return res
//             .status(200)
//             .send({ message: "Successfully gathered items", data });
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         return res.status(500).send("Failed to fetch user");
//     }
// });

// app.post("/items", async (req, res) => {
//     try {
//         const { name, descricao, image, valor, dono_id } = req.body;

//         const { data, error } = await supabase
//             .from("produtos")
//             .insert({
//                 name,
//                 descricao,
//                 image,
//                 dono: dono_id || null,
//                 valor,
//                 is_available: false
//             })
//             .select();

//         if (error) {
//             throw error;
//         }

//         return res
//             .status(200)
//             .send({ message: "Item criado com sucesso!", data });
//     } catch (error) {
//         return res.status(400).send({
//             message: "Houve um erro da sua parte, seu usuário maldito!",
//             error,
//         });
//     }
// });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //socket api
// io.on("connection", (socket) => {
//     console.log("a user connected");

//     socket.on("disconnect", () => {
//         console.log("user disconnected");
//     });

//     socket.on("chat message", async (msg) => {
//         const { data, error } = await supabase
//             .from("messages")
//             .insert([{ message: msg }]);

//         if (error) {
//             console.error("Error inserting message:", error);
//         } else {
//             io.emit("chat message", msg);
//         }
//     });
// });

// server.listen(3000, () => {
//     console.log("listening on *:3000");
// });
