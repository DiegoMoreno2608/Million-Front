import axios from 'axios';

const API_URL = 'https://localhost:44357/api/Properties';

export const getProperties = async (filters: {
  name?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
}) => {
  const response = await axios.get(API_URL, { params: filters });
  return response.data;
};

export const createProperty = async (property: any) => {
  const response = await axios.post(API_URL, property);
  return response.data;
};
export const getPropertyNames = async (): Promise<string[]> => {
  const response = await axios.get(`${API_URL}/names`);
  return response.data;
};
