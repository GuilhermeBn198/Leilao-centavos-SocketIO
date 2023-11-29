const express = require("express");
const { Pool } = require('pg');
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const PORT = 3000;
const fs = require("fs");
const socketIO = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:3001",
    },
});
app.use(cors());
//imports + cors

const dataFilePath = "data.json";

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'database_leilao_legal',
    password: '3332233',
    port: 5432,
});


function encontrarProduto(nomeChave, meuArray, ultimoArrematante, valor, image, descricao) {
    const produtoIndex = meuArray.findIndex((item) => item.nome_prod === nomeChave);
    
    if (produtoIndex !== -1) {
        meuArray[produtoIndex].ultimo_lance = ultimoArrematante;
        meuArray[produtoIndex].valor = valor;
        meuArray[produtoIndex].image = image;
        meuArray[produtoIndex].descricao = descricao;
        
        const dadosString = JSON.stringify({ products: meuArray }, null, 2);
        
        try {
            fs.writeFileSync(dataFilePath, dadosString);
        } catch (error) {
            console.error("Erro ao escrever no arquivo:", error);
        }
    }
}

app.get("/api", (req, res) => {
    pool.query('SELECT * FROM products', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

http.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`);
});

socketIO.on("connection", (socket) => {
    console.log(`⚡: ${socket.id} usuário acabou de se conectar!`);
    
    socket.on("disconnect", () => {
        console.log("🔥: Um usuário desconectou");
    });
    
    socket.on("addProduct", (data) => {
        const query = 'INSERT INTO products(nome_prod, descricao, valor, dono, ultimo_lance, image) VALUES($1, $2, $3, $4, $5, $6)';
        const values = [data.nome_prod, data.descricao, data.valor, data.dono, data.ultimo_lance, data.image];
        
        pool.query(query, values, (error, results) => {
            if (error) {
                throw error;
            }
            console.log('Product added successfully!');
            socket.broadcast.emit("addProductResponse", data);
        });
    });
    
    socket.on("bidProduct", (data) => {
        const query = 'UPDATE products SET ultimo_lance = $1, valor = $2 WHERE nome_prod = $3';
        const values = [data.ultimo_lance, data.valor, data.nome_prod];
        
        pool.query(query, values, (error, results) => {
            if (error) {
                throw error;
            }
            console.log('Product updated successfully!');
            socket.broadcast.emit("bidProductResponse", data);
        });
    });
})