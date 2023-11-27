"use client";
import React, { useEffect, useState } from "react";
import DashBoard from "@/components/DashBoard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import socket from "@/app/socket";

interface Item {
    nome_prod: string;
    descricao: string;
    valor: number;
    image: string;
    ultimo_lance: string;
    dono: string;
}

export default function Home() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        socket.on("addProductResponse", (data: Item) => {
            console.log('addProductResponse', data); 
            setItems((prevItems) => [...prevItems, data]);
        });

        socket.on("bidProductResponse", (data: Item) => {
            console.log('bidProductResponse', data);
            setItems((prevItems) =>
                prevItems.map((item) =>
                
                    item.nome_prod === data.nome_prod ? data : item
                )
            );
        });

        // Fetch initial data
        fetch("http://localhost:3000/api")
            .then((response) => response.json())
            .then((data) => {
                console.log('fetch /api', data);
                setItems(data.products);
            });

        return () => {
            // Cleanup
            socket.off("addProductResponse");
            socket.off("bidProductResponse");
        };
    }, []);

    return (
        <main className="flex w-screen h-screen flex-col justify-center items-center mt-14 ">
            <Header />
            <DashBoard items={items} />
            <Footer />
        </main>
    );
}
