import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';
// // import { createSelector } from 'reselect';


// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     updateFilter: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// export const { updateFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;

// ------------------------------------------------

// filterSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     updateFilter: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// export const { updateFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
