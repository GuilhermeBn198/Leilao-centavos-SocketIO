"use client";

import { useState } from "react";
import Image from "next/image";
import { GetServerSideProps } from 'next';
import Footer from "@/components/footer";
import Header from "@/components/header";
import ItemCarrousel from "@/components/ItemCarrousel";
import "./globals.css";

//imports

interface Item {
    id: number;
    name: string;
    valor: number;
    image: string;
    descricao: string;
    name_user: string;
  }

  interface MyData {
    items: Item[];
  }

  interface HomeProps {
    data: MyData;
  }

  export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    const res = await fetch('http://localhost:3000/items');
    const data: MyData = await res.json();
  
    return {
      props: { data },
    };
  };

// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:3000/items');
//     const data = await res.json();
//     return {
//         props: { data }, // will be passed to the page component as props
//     };
//  }

export default function Home( {data}) {
    const images = [
        "/peixes_fish2.jpg",
        "/playstation.jpg",
        "/sonic.jpg",
        "/furador_de_coco.jpg",
        "/cat.jpg",
    ];
    return (
        <main className="flex w-full h-screen flex-col justify-between ">
            <Header />
            <div className="overflow w-screen  lg:w-1/3 mx-auto my-2">
                <ItemCarrousel loop>
                    {images.map((src, i) => {
                        return (
                            // 👇 style each individual slide.
                            // relative - needed since we use the fill prop from next/image component
                            // h-64 - arbitrary height
                            // flex[0_0_100%]
                            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                            <div
                                className="relative h-96 flex-[0_0_100%]"
                                key={i}
                            >
                                {/* use object-cover + fill since we don't know the height and width of the parent */}
                                <Image
                                    src={src}
                                    fill
                                    className="object-cover"
                                    alt="alt"
                                />
                            </div>
                        );
                    })}
                </ItemCarrousel>
            </div>

            <Footer />
        </main>
    );
}
