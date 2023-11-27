import DashBoard from "@/components/DashBoard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from 'react';
 
const items: Array<{ nome_prod: string; descricao: string; valor: number; image: string; ultimo_lance:string; dono: string; }> = [
  { nome_prod: 'Item 1', descricao: 'This is item 1', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei"},
  { nome_prod: 'Item 2', descricao: 'This is item 2', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 3', descricao: 'This aaaaaaaais item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 2', descricao: 'This is item 2', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 2', descricao: 'This is item 2', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 2', descricao: 'This is item 2', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 3', descricao: 'This is item 3 aaaaaaasdasd asd asdasd asda sd asd asds aaaaa', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
  { nome_prod: 'Item 3', descricao: 'This is item 3', valor: 0.10, image: 'https://pbs.twimg.com/media/F9ske5rWAAAMbNY.jpg', ultimo_lance: "rock", dono: "o rei" },
 ];

export default function Home() {
    return (
        <main className="flex w-screen h-screen flex-col justify-center items-center mt-14 ">
            <Header />
            <DashBoard items={items} />
            <Footer />
        </main>
    );
}
