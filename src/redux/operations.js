import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as api from 'api/contactsApi';

export const getCurrentUser = createAsyncThunk(
  'contacts/currentUser',
  async (_, thunkAPI) => {
    const persistToken = thunkAPI.getState().phonebook.token;
    // console.log(persistToken);

    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }

    api.token.set(persistToken);
    try {
      const response = await api.getCurrentUser();
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk('contacts/logOutUser', async () => {
  try {
    await api.logOutUser();
    // console.log(response);
    api.token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const login = createAsyncThunk(
  'contacts/loginUser',
  async (user, thunkAPI) => {
    try {
      const response = await api.signinUser(user);
      console.log(response);
      api.token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error('Name or email is incorrect');
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logup = createAsyncThunk(
  'contacts/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await api.signupUser(user);
      // console.log(response);
      api.token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error('This user has already been registered');
      return thunkAPI.rejectWithValue();
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async contact => {
    const { name, number } = contact;
    try {
      await api.postContact(name, number);
    } catch (error) {
      console.log(error);
    }
  }
);

export const getContacts = createAsyncThunk('contacts/getContact', async () => {
  try {
    const response = await api.getContact();

    const editArrayContacts = response.data.map(({ id, name, number }) => {
      return { id, name, number };
    });
    // console.log(editArrayContacts);
    return editArrayContacts;
  } catch (error) {
    console.log(error);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await api.deleteContact(id);
    } catch (error) {
      console.log(error);
    }
  }
);
