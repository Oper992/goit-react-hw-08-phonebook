const axios = require('axios').default;
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signupUser = async user => {
  const response = await axios.post(`/users/signup`, user);
  return response;
};

export const postContact = async (name, phone) => {
  await axios.post(`/contacts`, {
    name: name,
    phone: phone,
  });
};

export const getContact = async () => {
  const response = await axios.get(`/contacts`);
  return response;
};

export const deleteContact = async id => {
  await axios.delete(`/contacts/${id}`);
};
