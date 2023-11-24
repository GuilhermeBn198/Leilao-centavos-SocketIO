"use client"

import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import './globals.css'



//imports

export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col justify-between ">
      <Header></Header>
      <Logo></Logo>
      <section className="flex bg-blue-700 h-4/6">
       I am atomic
      </section>
      <Footer/>
    </main>
  )
}
