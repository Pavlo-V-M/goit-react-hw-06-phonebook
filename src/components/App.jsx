import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import Filter from './filter/Filter';
import { selectFilteredContacts } from './store/contactsSlice';

const App = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className="AppWrap">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;


// App.jsx

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ContactForm from './contact-form/ContactForm';
// import ContactList from './contact-list/ContactList';
// import Filter from './filter/Filter';
// import { addContact } from './store/contactsSlice';
// import { updateFilter } from './store/filterSlice';

// export const App = () => {
//   const contacts = useSelector((state) => state.contacts);
//   const filter = useSelector((state) => state.filter);
//   const dispatch = useDispatch();

//   const handleFormStateDataReceiver = (data) => {
//     const { name } = data;
//     const existingContact = contacts.find((contact) => contact.name === name);
//     if (existingContact) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     dispatch(addContact(data));
//   };

//   const handleSearchChange = (event) => {
//     dispatch(updateFilter(event.target.value));
//   };

//   // const handleDeleteContact = (name) => {
//   //   dispatch(deleteContact(name));
//   // };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className="AppWrap">
//       <h1>Phonebook</h1>
//       <ContactForm onReceiver={handleFormStateDataReceiver} />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={handleSearchChange} />
//       <ContactList />
//     </div>
//   );
// };
