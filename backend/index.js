const { createClient } = require("@supabase/supabase-js");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io")
require("dotenv").config();
// imports

const httpServer = http.createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
})

const PORT = process.env.PORT || 3001
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
// usando variaveis de ambiente

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// instanciando a conexão com o servidor

io.on("connection", async (socket) => {
    console.log("user connected: ", socket.id)
    
    const { data, error } = await supabase
        .from('user_produtos') // replace 'user_produtos' with the name of your view
        .select('*'); // replace '*' with the columns you want to fetch
    
    if (error) {
        console.error('Error fetching data:', error);
        return;
    }
    
    socket.on("join_room", async (userName) => {
        console.log(`Username: ${userName} - Socket: ${socket.id}`);
        io.emit('user_joined', `${userName} está online!`); // broadcast message
      
        // Fetch data from Supabase
      
        // Send data to client
        io.emit('data', data);
      })
      

    socket.on("send-message", (msg) => {
        console.log(msg, "MSG");
        io.emit("receive-msg", msg)
    })

    socket.on("user-disconnect", () => {
        console.log("user disconnected: ", socket.id);
        const userName = users[socket.id]; // get username
        io.emit('user_left', `${userName} deixou o chat!`);
        delete users[socket.id]; // remove username
    })
})

httpServer.listen(PORT, () => {
    console.log("Socket.io server is running on port " + PORT)
})
