import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  if (!contacts || !Array.isArray(contacts)) {
    return null; // or return a message indicating no contacts
  }

  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: <span>{contact.number}</span>
            <button type="button" onClick={() => dispatch(deleteContact(contact.name))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

// ContactList.js

// import PropTypes from 'prop-types';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from '../store/contactsSlice';

// const ContactList = () => {
//   const contacts = useSelector((state) => state.contacts);
//   const dispatch = useDispatch();
 
//   return (
//     <div>
//       <ul>
//         {contacts.map((contact) => (
//           <li key={contact.id}>
//             {contact.name}: <span>{contact.number}</span>
//             <button type="button" onClick={() => dispatch(deleteContact(contact.name))}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };

// export default ContactList;

// ------------ VAR-2 -------------------------------

// import PropTypes from 'prop-types';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from '../store/contactsSlice';

// const ContactList = (props) => {
//   const { contacts } = props;
//   const dispatch = useDispatch();
//   const filter = useSelector((state) => state.filter);

//   const handleDeleteClick = (name) => {
//     const existingContact = contacts.find((contact) => contact.name === name);
//     if (!existingContact) {
//       alert(`${name} does not exist in contacts`);
//       return;
//     }
//     dispatch(deleteContact(name));
//   };

//   return (
//     <div>
//       <ul>
//         {contacts
//           .filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
//           .map((contact) => (
//             <li key={contact.id}>
//               {contact.name}: <span>{contact.number}</span>
//               <button type="button" onClick={() => handleDeleteClick(contact.name)}>
//                 Delete
//               </button>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };

// export default ContactList;




// <div>
    //   <ul>
    //     {contacts.map((contact) => (
    //       <li key={contact.name}>
    //         {contact.name}: <span>{contact.number}</span>
    //         <button type="button" onClick={() => handleDeleteClick(contact.name)}>Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

