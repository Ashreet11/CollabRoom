import axios from "axios";

const keepServerAwake = () => {
  const url = process.env.FRONTEND_URL || "http://localhost:5173"; 
  const interval = 30000;

  setInterval(() => {
    axios
      .get(url)
      .then(() => console.log("Pinged self to stay awake"))
      .catch((err) => console.error("Ping failed:", err.message));
  }, interval);
};

export default keepServerAwake;
