import { createContext } from "react";

export const CredentailsContext = createContext({
  storedToken: null,
  setStoredToken: () => {},
  user: {},
  setUser: () => {},
});
