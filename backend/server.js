import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import socketHandler from "./socket/socketHandler.js";
import keepServerAwake from "./config/keepAwake.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "*", // ✅ Update to frontend URL on Vercel later
    methods: ["GET", "POST"],
  },
});

keepServerAwake();     // 🔁 Keep Render backend alive
socketHandler(io);     // ⚡ Attach socket events

// Basic test route
app.get("/test", (req, res) => {
  res.send("CollabRoom backend is running!");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
