import api from '../helpers/api';

const httpRequest = {
  getProducts: (data?: any) => api.get('/products', data),
  updateProduct: (data: IProduct) => api.put(`products/${data.id}`, data),
};

export default httpRequest;
