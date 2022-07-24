import { createSlice } from '@reduxjs/toolkit';
import {
  postContact,
  getContacts,
  deleteContact,
  login,
  logOut,
  getCurrentUser,
  logup,
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
    token: null,
    isLoggedIn: false,
    user: null,
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
    [login.fulfilled](state, { payload }) {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
    },
    [logup.fulfilled](state, { payload }) {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.isLoggedIn = false;
      state.token = null;
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export const { addFilter } = slice.actions;

export const contacts = slice.reducer;
