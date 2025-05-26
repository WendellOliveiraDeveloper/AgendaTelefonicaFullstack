import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "listaContatos",
  initialState,
  reducers: {
    addContato: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, email, phone) {
        return {
          payload: {
            id: nanoid(),
            name,
            email,
            phone,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    updateContact(state, action) {
      const { id, name, email, phone } = action.payload;
      const existingContact = state.items.find((contact) => contact.id === id);
      if (existingContact) {
        existingContact.name = name;
        existingContact.email = email;
        existingContact.phone = phone;
      }
    },
  },
});

export const { addContato, deleteContact, updateContact } =
  contactsSlice.actions;

export const selectAllContacts = (state) => state.listaContatos.items;

export const verQuantidadeContatos = (state) =>
  state.listaContatos.items.length;

export default contactsSlice.reducer;
