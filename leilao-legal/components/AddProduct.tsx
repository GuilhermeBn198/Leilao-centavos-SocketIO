import React, { useState } from "react";
import { Socket } from "socket.io-client"; // Import the Socket type

interface AddProductProps {
    closeModal: () => void; // closeModal is a function that doesn't return anything
    socket: Socket; // socket is of type Socket
}

const AddProduct: React.FC<AddProductProps> = ({ closeModal, socket }) => {
    // Add closeModal prop
    const [nome_prod, setnome_prod] = useState("");
    const [valor, setvalor] = useState(0);
    const [descricao, setdescricao] = useState("");
    const [ultimo_lance, setultimo_lance] = useState("");
    const [image, setimage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        socket.emit("addProduct", {
            nome_prod,
            descricao,
            valor,
            ultimo_lance,
            image,
            dono: localStorage.getItem("nome_user"), // FAZER MODAL COM UM IF E USESTATE NA PAGE.TSX E JOGAR NO LOCALSTORAGE
        });
        closeModal(); // Close the modal after submitting the form
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Add these classes */}
            <div className="bg-slate-400 p-4 rounded shadow-lg">
                {/* Add a background color, padding, rounded corners, and a shadow */}
                <button
                    className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
                    onClick={closeModal}
                >
                    Close
                </button>
                {/* Add this line */}
                <h2 className="text-lg w-full text-center mb-2"><strong>Add Novo Produto</strong></h2>
                <div className="">
                    <form className="" onSubmit={handleSubmit}>
                        <div className="m-2">
                            <label htmlFor="nome_prod">Nome do Produto: </label>
                            <input
                                type="text"
                                className="rounded px-2 py-3 text-gray-700 border border-gray-400"
                                placeholder="Nome do Produto"
                                name="nome_prod"
                                value={nome_prod}
                                onChange={(e) => setnome_prod(e.target.value)}
                                required
                            />

                            <label htmlFor="valor">Preço Inicial: </label>
                            <input
                                type="number"
                                className="rounded px-2 py-3 text-gray-700 border border-gray-400"
                                placeholder={"Digite o valor de " + nome_prod}
                                name="valor"
                                value={valor}
                                onChange={(e) =>
                                    setvalor(Number(e.target.value))
                                } // Convert the value to a number
                                required
                            />
                        </div>
                        <div className="m-2">
                            <label htmlFor="descricao">Descrição: </label>
                            <input
                                type="text"
                                className="rounded px-2 py-3 text-gray-700 border border-gray-400 overflow-scroll"
                                placeholder={"Digite aDescricao de " + (nome_prod ? false : "Produto")}
                                name="descricao"
                                value={descricao}
                                onChange={(e) =>
                                    setdescricao(e.target.value)
                                } 
                                required
                            />
                            <label htmlFor="image">Imagem: </label>
                            <input
                                type="text"
                                className="rounded px-2 py-3 text-gray-700 border border-gray-400 overflow-scroll"
                                placeholder={"Digite o endereço da imagem de " + nome_prod}
                                name="image"
                                value={image}
                                onChange={(e) =>
                                    setimage(e.target.value)
                                } 
                                required
                            />
                        </div>

                        <button
                            className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded ml-2"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
