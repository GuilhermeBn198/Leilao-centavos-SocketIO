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
      <section className="flex  h-4/6">
       I am atomic
      </section>
      <Footer/>
    </main>
  )
}
