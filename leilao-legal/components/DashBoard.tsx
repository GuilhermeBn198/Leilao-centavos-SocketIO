import React, { useState } from "react";
import Grid from "./Grid";
import AddProduct from "./AddProduct";

interface DashBoardProps {
    items: Array<{
      id: number;
      name: string;
      description: string;
      image: string;
      value: number;
      time: number;
      sold: boolean;
      startAt: string;
      bidders: string[];
    }>;
    socket: any;
    user: string;
    lances: number;
    subtractLance: () => void;
}

export default function DashBoard({ items, socket, user, lances, subtractLance }: DashBoardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div
            className={
                "flex flex-col w-screen h-screen p-4 bg-teal-950 overflow-clip pt-20 overflow-y-scroll"
            }
        >
            <div className="flex text-indigo-500 text-sm/relaxed bg-stone-800 border-l-indigo-800 w-full justify-around items-center rounded min-h-fit p-4">
                <div className="flex items-center justify-around w-1/6 ">
                    <p>
                        <strong>Conta Logada:</strong>
                    </p>
                    <p>
                        <strong>{localStorage.getItem("nome_user")}</strong>
                    </p>
                </div>
                <div>
                    <button
                        onClick={openModal}
                        className="bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded"
                    >
                        Criar Leilão
                    </button>
                </div>
            </div>
            <section className="flex mt-2 justify-center">
                <Grid items={items} socket={socket} user={user} lances={lances} subtractLance={subtractLance} />
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-filter backdrop-blur z-50">
                        <AddProduct closeModal={closeModal} socket={socket} />
                    </div>
                )}
            </section>
        </div>
    );
}