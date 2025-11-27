import axios from 'axios';

const API_URL = "http://localhost:5277/api/ProdutosControllers";

const produtosService = {
  listar: () => axios.get(API_URL),
  buscarPorId: (id) => axios.get(`${API_URL}/${id}`),
  criar: (data) => axios.post(API_URL, data),
  atualizar: (id, data) => axios.put(`${API_URL}/${id}`, data),
  deletar: (id) => axios.delete(`${API_URL}/${id}`)
};

export default produtosService;
