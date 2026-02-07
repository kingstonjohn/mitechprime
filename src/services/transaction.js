import request from './request'

const transactionService = {
    all: (uid) => request.get(`/user/transactions/${uid}`),
}

export default transactionService