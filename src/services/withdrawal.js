import request from './request'

const withdrawalService = {
    add: (data) => request.post('/user/withdrawal/add', data),
}

export default withdrawalService