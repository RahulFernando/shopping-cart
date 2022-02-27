import api from '../helpers/api';

const httpRequest = {
  getCart: (data: Number) => api.get(`/users/${data}`),
  postPurchase: (data: IPurchase) => api.post('purchases', data),
  patchCart: (data: ICart) => api.patch(`users/${data.id}`, data),
};

export default httpRequest;
