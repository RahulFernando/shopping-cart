import api from '../helpers/api';

const httpRequest = {
    logUser: (data: any) => api.post('/users', data),
}

export default httpRequest;