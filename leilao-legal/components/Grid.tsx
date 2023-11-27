// Grid.tsx
import React from "react";

interface Item {
    nome_prod: string;
    descricao: string;
    valor: number;
    image: string;
    ultimo_lance: string;
    dono: string;
}

interface GridProps {
    items: Item[];
}

const Grid: React.FC<GridProps> = ({ items }) => (
    <div className="grid grid-cols-8 gap-2">
        {items.map((item, index) => (
            <div key={index} className="p-2 border border-gray-200 rounded max-h-64 max-w-4xl items-center justify-around flex flex-col bg-lime-800">
                <h2 className="text-base font-bold mb-0">{item.nome_prod}</h2>
                <img src={item.image} alt={item.nome_prod} loading="lazy" style={{width: '100px', height: '100px',objectFit: 'cover', borderRadius: '10px'}} />
                <p className="text-minusculo">{item.descricao}</p>
                <p className="text-sm"><strong>Dono: </strong>{item.dono}</p>
                <p className="text-sm"><strong>ultimo lance:</strong> {item.ultimo_lance}</p>
                <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded text-xs">
                    Comprar
                </button>
            </div>
        ))}
    </div>
);

export default Grid;
