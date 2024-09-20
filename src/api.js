import axios from 'axios';

export const getProductosRelacionados = (id) => {
  return axios.get(`https://apptiendaback-1.onrender.com/api/productos/${id}/relacionados/`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error al obtener productos relacionados:', error);
      throw error;
    });
};
