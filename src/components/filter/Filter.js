// Filter.js

// import PropTypes from 'prop-types';
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { updateFilter } from '../store/filterSlice';

// const Filter = (props) => {
//   const { value } = props;
//   const dispatch = useDispatch();

//   const handleInputChange = (event) => {
//     dispatch(updateFilter(event.target.value));
//   };

//   return (
//     <div>
//       <label htmlFor="filter">Find contacts by name</label>
//     <input
//       type="text"
//       id="filter"
//       value={value}
//       onChange={onChange}
//     />
//     </div>
//   );
// };

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
// };

// export default Filter;

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../store/filterSlice';

const Filter = (props) => {
  const { value } = props;
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;

