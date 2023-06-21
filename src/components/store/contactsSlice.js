import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.name !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;

// Selectors
export const selectContacts = (state) => state.contacts;
export const selectFilter = (state) => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default contactsSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';
// // import { createSelector } from 'reselect';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact: (state, action) => {
//       state.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       return state.filter((contact) => contact.name !== action.payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

//-----------------------------------------------------------

// contactsSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact: (state, action) => {
//       state.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       return state.filter((contact) => contact.name !== action.payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
