import request from './request'

const liveTradeService = {
    all: () => request.get(`/user/live-trade`),
    join: (data) => request.post('/user/livetrade/join', data),
    get: (data) => request.get(`/user/livetrade/${data}`),
}

export default liveTradeService