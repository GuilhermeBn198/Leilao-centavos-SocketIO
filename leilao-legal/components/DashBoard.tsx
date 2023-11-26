import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <div className="mt-16 border-t border-gray-100 pt-8 w-1/6 bg-slate-700">
            <p className="flex justify-between text-xs/relaxed text-gray-500">
                <p className="flex justify-center w-1/2 ">
                    <p className="pr-2">©</p>
                    <Link
                        href="https://github.com/GuilhermeBn198"
                        className="text-blue-600 pr-2"
                    >
                        Guilherme Bernardo
                    </Link>
                    <p className="pr-2">2023.</p>
                </p>
                <p className="flex justify-center w-1/2">
                    <p className="pr-2">Created with:</p>
                    <p className="text-gray-700 underline transition hover:text-gray-700/75 pr-2">
                        NextJs + Socket.io
                    </p>
                    <p className="pr-2">and</p>
                    <p className="pr-2 text-gray-700 underline transition hover:text-gray-700/75">
                        Supabase + Node.js.
                    </p>
                </p>
            </p>
        </div>
    );
}
