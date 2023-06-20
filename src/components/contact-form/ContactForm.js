// ContactForm.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../store/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.contactsNumber.value;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs */}
    </form>
  );
};

export default ContactForm;
