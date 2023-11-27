import React, { useState } from "react";
import Grid from "./Grid";
import AddProduct from "./AddProduct";

interface DashBoardProps {
    items: Array<{
        nome_prod: string;
        descricao: string;
        valor: number;
        image: string;
        ultimo_lance: string;
        dono: string;
    }>;
    socket: any;
}

export default function DashBoard({ items, socket }: DashBoardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col pt-1 w-screen h-full p-4 bg-teal-950 overflow-clip">
            <div className="flex h-16 bg-black text-sm/relaxed text-gray-500 border-l-indigo-800 w-full justify-around items-center rounded ">
                <div className="flex items-center justify-around w-1/6 h-full ">
                    <p>
                        <strong>Conta Logada:</strong>
                    </p>
                    <p>
                        <strong>aaaaa</strong>
                    </p>
                </div>
                <div>
                    <button
                        onClick={openModal}
                        className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Criar Leilão
                    </button>
                </div>
            </div>
            <section className="flex mt-2 justify-center">
                <Grid items={items} />
                {isModalOpen && <AddProduct closeModal={closeModal} socket={socket} />}
            </section>
        </div>
    );
}
