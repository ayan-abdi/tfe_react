import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import { createLogger } from "redux-logger";

const logger = createLogger();
// l'outil enregistreur dans le redux dev tools en forme d'arbre

const store = configureStore({
  // Methode qui remplace le combine reducer  et le compass
  reducer: {
    user: useReducer,
  },

  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV === "development",
});

export default store;
