// ContactForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../store/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [contactsNumber, setContactsNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const newContact = {
      id: nanoid(),
      name,
      number: contactsNumber,
    };

    dispatch(addContact(newContact));

    form.reset('');
    // Clear the form state
    setName('');
    setContactsNumber('');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactsNumberChange = (event) => {
    setContactsNumber(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInputID">Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
        id="nameInputID"
      />
      <label htmlFor="numberInputID">Number</label>
      <input
        type="tel"
        name="contactsNumber"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        title="Phone number format: 123-45-67"
        required
        value={contactsNumber}
        onChange={handleContactsNumberChange}
        id="numberInputID"
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

