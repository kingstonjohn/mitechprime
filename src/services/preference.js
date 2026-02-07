import request from './request'

const preferenceService = {
    set: (data) => request.post(`/user/preference/set`, data),
}

export default preferenceService