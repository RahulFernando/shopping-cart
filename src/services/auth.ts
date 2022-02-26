import api from '../helpers/api';

const httpRequest = {
  logUser: (data: string) => api.get(`/users?${data}`),
};

export default httpRequest;
