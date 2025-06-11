import axios from 'axios';

const API_URL = 'https://localhost:44357/api/PropertiesTrace';

export const getAllTraces = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createProperty = async (property: any) => {
  const response = await axios.post(API_URL, property);
  return response.data;
};
export const getPropertyNames = async (): Promise<string[]> => {
  const response = await axios.get(`${API_URL}/names`);
  return response.data;
};
