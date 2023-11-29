"use client";
import React, { useEffect, useState } from "react";
import DashBoard from "@/components/DashBoard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import socket from "@/app/socket";
import LoginModal from "@/components/Login";

interface Item {
    nome_prod: string;
    descricao: string;
    valor: number;
    image: string;
    ultimo_lance: string;
    dono: string;
}

interface user {
    nome_user: string,
    email: string,
    dinheiro: number
}

export default function Home() {
    const [items, setItems] = useState<Item[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [user, setUser] = useState<user | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleLogin = (userData:user) => {
      setIsModalOpen(false);
      setUser(userData);
      localStorage.setItem('nome_user', userData.nome_user);
    };
    
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('nome_user');
        setIsModalOpen(true);
    };
    
    useEffect(() => {
        socket.on("addProductResponse", (data: Item) => {
            console.log('addProductResponse', data); 
            setItems((prevItems) => [...(prevItems || []), data]);
        });
        
        socket.on("bidProductResponse", (data: Item) => {
            console.log('bidProductResponse', data);
            setItems((prevItems) =>
            (prevItems || []).map((item) =>
            item.nome_prod === data.nome_prod ? data : item
            )
            );
        });
        
        // Fetch initial data
        fetch("http://localhost:3000/api")
        .then((response) => response.json())
        .then((data) => {
            // if (Array.isArray(data.products)) {
                // setItems(data.products);
            // } else {
                // setItems([]);
            // }
            console.log(data);
            
            setIsLoading(false);
        });
    }, []);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }    
    
    console.log('Type of fetched data:', typeof items);
    console.log('Structure of fetched data:', JSON.stringify(items, null, 2));
    return (
        <main className="flex w-screen h-screen flex-col justify-center items-center  overflow-hidden">
            {isModalOpen && <LoginModal onLogin={handleLogin} />}
            {user ? (
                <div>
                    <Header onLogout={handleLogout}/>
                    <DashBoard items={items} socket={socket}/>
                    <Footer />
                </div>
            ) : (
                <div>Please log in to view this content.</div>
            )}
        </main>
    );
}