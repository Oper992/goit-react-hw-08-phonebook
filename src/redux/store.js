import { configureStore } from '@reduxjs/toolkit';
import { contacts } from './contacts';

export const store = configureStore({
  reducer: { phonebook: contacts },
  devTools: true,
});
