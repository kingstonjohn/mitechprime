import request from './request'

const stockService = {
    all: (data, query) => request.get(`/user/stocks/${data}?search=${query}`),
    buy: (data) => request.post('/user/stocks/buy', data),
    get: (data) => request.get(`/user/stocks/single/${data}`),
}

export default stockService