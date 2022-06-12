import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const base_url = 'https://ghibliapi.herokuapp.com';

export const peopleSlice = createSlice({
  name: 'people',
  initialState: { docs: [] },
  reducers: {
    setPeopleDocs: (state, action) => {
      state.docs = action.payload;
    },
  },
});

export const { setPeopleDocs } = peopleSlice.actions;

export default peopleSlice.reducer;

export const getAllPeoples = () => (dispatch: any) => {
  axios
    .get(`${base_url}/people`)
    .then((response) => dispatch(setPeopleDocs(response.data)))
    .catch((error) => console.log(error));
};
