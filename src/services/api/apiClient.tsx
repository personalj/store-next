import axios from 'axios';
import { baseUrl } from '@/consts';

export const api = axios.create({
  baseURL: baseUrl,
});
