import request from './request'

const kycService = {
    upload: (data) => request.post('/user/kyc/upload', data),
}

export default kycService