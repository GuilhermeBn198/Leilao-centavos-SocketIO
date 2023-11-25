import { useEffect } from "react";
import io from 'socket.io-client';

let socket

export default function Home() {
    useEffect(() => socketInitializer(), []);

    async function socketInitializer() {
        await fetch('/api/socket')
        socket = io()

        socket.on('connect', () => {
            console.log('connected');
        })
    }

    return null
}