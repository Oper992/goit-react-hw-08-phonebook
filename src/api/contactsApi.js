const axios = require('axios').default;
axios.defaults.baseURL = 'https://62d2a4b681cb1ecafa635d08.mockapi.io';

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
