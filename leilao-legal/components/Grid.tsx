// Grid.tsx
import React from "react";

interface Item {
    nome: string;
    descricao: string;
    valor: number;
    image: string;
}

interface GridProps {
    items: Item[];
}

const Grid: React.FC<GridProps> = ({ items }) => (
    <div className="grid grid-cols-9 gap-4">
        {items.map((item, index) => (
            <div key={index} className="p-2 border border-gray-200 rounded max-h-64 max-w-4xl items-center flex flex-col">
                <h2 className="text-sm font-bold mb-1">{item.nome}</h2>
                <img src={item.image} alt={item.nome} loading="lazy" style={{width: '100px', height: '100px',objectFit: 'cover', borderRadius: '10px'}} />
                
                <p className="text-xs">{item.descricao}</p>
                <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded text-xs">
                    Comprar
                </button>
            </div>
        ))}
    </div>
);

export default Grid;
