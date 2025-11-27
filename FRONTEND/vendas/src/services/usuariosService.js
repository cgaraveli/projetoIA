import api from './api';

const usuariosService = {
  listar: () => api.get('/usuarios'),
  buscarPorId: (id) => api.get(`/usuarios/${id}`),
  criar: (dados) => api.post('/usuarios', dados),
  atualizar: (id, dados) => api.put(`/usuarios/${id}`, dados),
  deletar: (id) => api.delete(`/usuarios/${id}`),
};

export default usuariosService;
