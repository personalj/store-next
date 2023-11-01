import { api } from '@/services/api/apiClient';

export const getCategories = async () => {
  const res = await api.get<string[]>('/products/categories');
  return res.data;
};
