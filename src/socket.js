import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://online-sketchbook-ak.vercel.app/' : 'http://localhost:3000'
export const socket = io(URL);