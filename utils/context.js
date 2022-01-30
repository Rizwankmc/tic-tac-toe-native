import { createContext } from "react";

export const CredentailsContext = createContext({
  storedToken: null,
  setStoredToken: () => {},
  user: {},
  setUser: () => {},
  selectedChatUSer: null,
  setSelectedChatUser: () => {},
  socket: null,
  setSocket: () => {},
});
