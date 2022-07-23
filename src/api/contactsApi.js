const axios = require('axios').default;
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = null;
  },
};

export const getCurrentUser = async () => {
  const response = await axios.get(`/users/current`);

  return response;
};

export const logOutUser = async () => {
  const response = await axios.post(`/users/logout`);
  return response;
};

export const signinUser = async user => {
  const response = await axios.post(`/users/login`, user);
  return response;
};

export const signupUser = async user => {
  const response = await axios.post(`/users/signup`, user);
  return response;
};

export const postContact = async (name, number) => {
  await axios.post(`/contacts`, {
    name: name,
    number: number,
  });
};

export const getContact = async () => {
  const response = await axios.get(`/contacts`);
  return response;
};

export const deleteContact = async id => {
  await axios.delete(`/contacts/${id}`);
};
