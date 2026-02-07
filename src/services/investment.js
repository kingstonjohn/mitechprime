import request from './request'

const investmentService = {
    all: () => request.get(`/user/investment`),
    join:(data) => request.post('/user/investment/join', data),
    get: (data) => request.get(`/user/investment/${data}`),
}

export default investmentService