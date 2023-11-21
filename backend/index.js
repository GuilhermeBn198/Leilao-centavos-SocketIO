const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')
// imports


const app = express();
const server = http.createServer(app);
const io = socketIo(server);
// declaração das variaveis do servidor

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY
// usando variaveis de ambiente

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
// instanciando a conexão com o servidor


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', async (msg) => {
        const { data, error } = await supabase
            .from('messages')
            .insert([{ message: msg }]);

        if (error) {
            console.error('Error inserting message:', error);
        } else {
            io.emit('chat message', msg);
        }
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
