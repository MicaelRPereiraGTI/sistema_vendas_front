import api from './api';
import { Produto } from '../types/Produto';

export const listarProdutos = async (): Promise<Produto[]> => {
  const response = await api.get('/produtos');
  return response.data;
};