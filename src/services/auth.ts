import api from '../helpers/api';

const httpRequest = {
  logUser: (data: string) => api.get(`/users?${data}`),
  registerUser: (data: IAuthUser) => api.post('/users', data),
};

export default httpRequest;
