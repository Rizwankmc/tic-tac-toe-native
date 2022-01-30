import io from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseURL } from "./constants";

window.navigator.userAgent = "react-native";

const socketConnection = (token) => {
  console.log("token =>", token);
  const socket = io(baseURL, {
    reconnectionDelayMax: 1000,
    reconnection: true,
    transports: ["websocket", "xhr-polling"],
    rejectUnauthorized: false,
    query: `token=${token}`,
  });

  socket.on("connect", () => {
    console.log("connected");
    socket.emit("join", { userId: token });
  });

  socket.on("reconnect", () => {
    if (token) {
      console.log("Reconnecting called");
      socket.emit("join", sendToken);
    }
  });

  const tryReconnect = () => {
    setTimeout(() => {
      socket.io.open((err) => {
        if (err) {
          tryReconnect();
        }
      });
    }, 2000);
  };

  socket.io.on("close", tryReconnect);
  return socket;
};

export { socketConnection };
