import { api } from '@/services/api/apiClient';
import { Product } from '@/services/products/types';
export const getProducts = async (categorySlug?: string) => {
  const response = categorySlug
    ? await api.get<Product[]>(`/products/category/${categorySlug}`)
    : await api.get<Product[]>(`/products`);
  return response.data;
};

export const getProduct = async (id?: string) => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};
