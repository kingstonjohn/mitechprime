import request from './request'

const profitService = {
    all: (uid) => request.get(`/user/profit/all/${uid}`),
}

export default profitService