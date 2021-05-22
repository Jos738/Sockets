//import {} from "dotenv/config.js";
import dotenv from 'dotenv'
dotenv.config()
import { Server } from "./models/server.js";

const server = new Server();

server.listen();
