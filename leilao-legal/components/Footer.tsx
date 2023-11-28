import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <div className=" border-t border-gray-100 p-3 w-screen h-10 fixed bottom-0 bg-stone-800 z-10">
            <div className="flex justify-between text-sm/relaxed text-gray-500">
                <div className="flex justify-center w-1/2 ">
                    <p className="pr-2">©</p>
                    <Link
                        href="https://github.com/GuilhermeBn198"
                        className="text-blue-800 font- pr-2"
                    >
                        Guilherme Bernardo
                    </Link>
                    <p className="pr-2">2023.</p>
                </div>
                <div className="flex justify-center w-1/2">
                    <p className="pr-2">Created with:</p>
                    <p className="text-indigo-500 underline transition hover:text-indigo-500/75 pr-2">
                        NextJs + Socket.io
                    </p>
                    <p className="pr-2">and</p>
                    <p className="pr-2 text-indigo-500 underline transition hover:text-indigo-500/75">
                        Supabase + Node.js.
                    </p>
                </div>
            </div>
        </div>
    );
}
