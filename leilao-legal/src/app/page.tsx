"use client"

import { useState } from "react";
import Image from 'next/image'
import Footer from "@/components/footer";
import Header from "@/components/header";
import Logo from "@/components/Logo";


//imports

export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col justify-between">
      <Header></Header>
      <Logo></Logo>
      <section className="flex bg-blue-700 h-3/5">
       I am atomic
      </section>
      <Footer></Footer>
    </main>
  )
}
