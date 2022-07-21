import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api/contactsApi';

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async contact => {
    const { name, phone } = contact;
    const response = await api.postContact(name, phone);

    console.log(response);
  }
);

export const getContacts = createAsyncThunk('contacts/getContact', async () => {
  const response = await api.getContact();

  const editArrayContacts = response.data.map(({ id, name, phone }) => {
    return { id, name, phone };
  });
  // console.log(editArrayContacts);
  return editArrayContacts;
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await api.deleteContact(id);

    // console.log(editArrayContacts);
  }
);
