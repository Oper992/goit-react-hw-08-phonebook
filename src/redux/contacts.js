import { createSlice } from '@reduxjs/toolkit';
import { postContact, getContacts, deleteContact } from './operations';

const slice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    isLoading: true,
    error: null,
    post: false,
    delete: false,
    filter: '',
  },
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [postContact.pending](state) {
      state.isLoading = true;
      state.post = 'pending';
    },
    [postContact.fulfilled](state) {
      state.post = true;
    },
    [postContact.rejected](state, { error }) {
      return { ...state, error: error, isLoading: false };
    },
    [getContacts.pending](state) {
      state.isLoading = true;
    },
    [getContacts.fulfilled](state, { payload }) {
      return {
        ...state,
        contacts: payload,
        isLoading: false,
        post: false,
        delete: false,
      };
    },
    [getContacts.rejected](state, { error }) {
      return { ...state, error: error, isLoading: false };
    },
    [deleteContact.pending](state) {
      // return { ...state, isLoading: true };
    },
    [deleteContact.fulfilled](state) {
      return { ...state, delete: true };
    },
    [deleteContact.rejected](state, { error }) {
      return { ...state, error: error, isLoading: false };
    },
  },
});

export const { addFilter } = slice.actions;

export const contacts = slice.reducer;
