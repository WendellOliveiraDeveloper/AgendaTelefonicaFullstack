import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contatos/contatosSlice";

export const store = configureStore({
  reducer: {
    listaContatos: contactsReducer,
  },
});
