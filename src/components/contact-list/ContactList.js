// ContactList.js

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice';

const ContactList = (props) => {
  const { contacts } = props;
  const dispatch = useDispatch();

  const handleDeleteClick = (name) => {
    dispatch(deleteContact(name));
  };

  return (
    <div>
      {/* Contact list */}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
