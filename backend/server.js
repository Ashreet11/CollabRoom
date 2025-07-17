import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import socketHandler from "./socket/socketHandler.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "*", 
    methods: ["GET", "POST"],
  },
});

     
socketHandler(io);     

app.get("/", (req, res) => {
  res.status(200).send("Server is up and running.");
});


app.get("/test", (req, res) => {
  res.send("CollabRoom backend is running!");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
