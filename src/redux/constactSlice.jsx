import { createSlice } from '@reduxjs/toolkit';
export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = ContactsSlice.actions;
