// ContactList.js

// import PropTypes from 'prop-types';
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../store/contactsSlice';

// const ContactList = (props) => {
//   const { contacts } = props;
//   const dispatch = useDispatch();

//   const handleDeleteClick = (name) => {
//     dispatch(deleteContact(name));
//   };

//   return (
//     <div>
//       <ul>
//       {contacts.map(contact => (
//         <li key={contact.name}>
//           {contact.name}: <span>{contact.number}</span>
//           <button type="button" onClick={() => onDelete(contact.name)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//     </div>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };

// export default ContactList;

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
      <ul>
        {contacts.map((contact) => (
          <li key={contact.name}>
            {contact.name}: <span>{contact.number}</span>
            <button type="button" onClick={() => handleDeleteClick(contact.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;

