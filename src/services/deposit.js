import request from './request'

const depositService = {
    all: () => request.get(`/user/deposit/all`),
    add: (data) => request.post('/user/deposit/add', data),
    getInvoice: (uid) => request.get(`/user/deposit/invoice/${uid}`),
}

export default depositService