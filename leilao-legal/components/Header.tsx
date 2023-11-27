import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <header className="bg-sky-900 border-b border-gray-100 w-screen fixed top-0">
            <div className="mx-auto max-w-4xl sm:px-6 lg:px-8 h-14">
                {/*<!-- lg+ -->*/}
                <nav className="flex items-center justify-between h-12 lg:h-16">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <p className="text-lg">Leilão Legal</p>
                        </a>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-10">
                        <a
                            href="#"
                            title="Minha Conta"
                            className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
                        >
                            Minha Conta{" "}
                        </a>
                    </div>
                </nav>

                {/*<!-- xs to lg -->*/}
                <nav className="min-h-1/3 px-4 py-10 text-center bg-black md:hidden">
                    <nav className="flex flex-col items-center mt-10 space-y-2">
                        <a
                            href="#"
                            title="Minha Conta"
                            className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
                        >
                            Minha Conta{" "}
                        </a>
                    </nav>
                </nav>
            </div>
        </header>
    );
}
