"use client"

import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ItemCarrousel from "@/components/ItemCarrousel";
import './globals.css'



//imports

export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col justify-between ">
      <Header/>
      <ItemCarrousel/>
      <Footer/>
    </main>
  )
}
