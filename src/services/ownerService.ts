import axios from 'axios';

const API_URL = 'https://localhost:44357/api/Owners';

export const createOwner = async (owner: {
  name: string;
  address: string;
  birthday: string;
  photo: File;
}) => {
  const formData = new FormData();
  formData.append('name', owner.name);
  formData.append('address', owner.address);
  formData.append('birthday', owner.birthday);
  formData.append('photo', owner.photo);

  const response = await axios.post(API_URL, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

export const getOwners = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
export const getOwnerNames = async () => {
  const response = await axios.get(`${API_URL}/names`);
  return response.data; 
};
