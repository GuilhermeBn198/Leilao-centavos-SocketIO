import Link from "next/link";
import React from "react";
import { FC } from 'react';
import Grid from './Grid';

interface DashBoardProps {
    items: Array<{ nome: string; descricao: string; valor: number; image: string; ultimo_lance: string; dono: string}>;
   }

   export default function DashBoard({ items }: DashBoardProps) {
    const transformedItems = items.map(item => ({
        title: item.nome,
        description: item.descricao,
      }));
    return (
        <div className="flex flex-col pt-1 w-screen h-full p-4 bg-teal-950 overflow-clip">
            <div className="flex h-16 bg-black text-sm/relaxed text-gray-500 border-l-indigo-800 w-full justify-around items-center rounded ">
                <div className="flex items-center justify-around w-1/6 h-full ">
                    <p><strong>Conta  Logada:</strong></p>
                    <p><strong>aaaaa</strong></p>
                </div>
                <div>
                    <button className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded">
                        Criar Leilão
                    </button>
                </div>
            </div>
            <section className="flex mt-2 justify-center">
            <Grid items={items} />
            </section>
        </div>
    );
}
