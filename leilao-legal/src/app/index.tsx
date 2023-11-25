"use client";

import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";
import { useEffect, useState } from "react";
//imports

export default function Home() {
// export default async function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch data from your server here and set it to the items state
    }, []);
    // async function getData() {
    //     const res = await fetch("http://localhost:3000/items");
    //     const data = await res.json();

    //     return data;
    // }

    // console.log(await getData());
    return (
        <main className="flex w-full h-screen flex-col justify-between overflow-hidden">
            <Header />
            <div className=" flex w-2/3 h-2/3 mx-auto my-2 bg-slate-600"></div>
            <Footer />
        </main>
    );
}
