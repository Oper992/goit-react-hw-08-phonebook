import { createSlice } from '@reduxjs/toolkit';
import {
  postContact,
  getContacts,
  deleteContact,
  register,
} from './operations';

const slice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    isLoading: true,
    error: null,
    post: false,
    delete: false,
    filter: '',
    token: '',
    isLoggedIn: false,
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
    [register.fulfilled](state, { payload }) {
      return { ...state, token: payload };
    },
  },
});

export const { addFilter } = slice.actions;

export const contacts = slice.reducer;
