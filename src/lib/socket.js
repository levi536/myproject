import { io } from "socket.io-client";

const fallbackURL = "https://advanced-inventory-management-system-v1.onrender.com";

const socket = io(process.env.REACT_APP_BACKEND_URL || fallbackURL, {
  withCredentials: true,
  transports: ["websocket", "polling"],
});

export default socket;
