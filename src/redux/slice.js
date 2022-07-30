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
    refresh: false,
    login: false,
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
      state.delete = true;
    },
    [deleteContact.fulfilled](state) {
      return { ...state, delete: false };
    },
    [deleteContact.rejected](state, { error }) {
      return { ...state, error: error, isLoading: false };
    },
    [login.pending](state) {
      state.login = true;
    },
    [login.fulfilled](state, { payload }) {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.login = false;
    },
    [login.rejected](state, { payload }) {
      state.login = false;
    },
    [logup.pending](state) {
      state.login = true;
    },
    [logup.fulfilled](state, { payload }) {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.login = false;
    },
    [logup.rejected](state) {
      state.login = false;
    },
    [logOut.fulfilled](state) {
      state.isLoggedIn = false;
      state.token = null;
    },
    [getCurrentUser.pending](state) {
      state.refresh = true;
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.refresh = false;
    },
    [getCurrentUser.rejected](state) {
      state.refresh = false;
    },
  },
});

export const { addFilter } = slice.actions;

export const contacts = slice.reducer;
