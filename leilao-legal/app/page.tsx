import DashBoard from "@/components/DashBoard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from 'react';
 
const items: Array<{ nome: string; descricao: string; valor: number; image: string; }> = [
  { nome: 'Item 1', descricao: 'This is item 1', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 2', descricao: 'This is item 2', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 2', descricao: 'This is item 2', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 2', descricao: 'This is item 2', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 2', descricao: 'This is item 2', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 3', descricao: 'This is item 3aaaaaaaaaa', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  { nome: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg' },
  // ... more items
 ];

export default function Home() {
    return (
        <main className="flex w-screen h-screen flex-col justify-center items-center  ">
            <Header />
            <DashBoard items={items} />
            <Footer />
        </main>
    );
}
