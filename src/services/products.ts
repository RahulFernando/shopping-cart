import api from '../helpers/api';

const httpRequest = {
  getProducts: (data?: any) => api.get('/products', data),
};

export default httpRequest;
