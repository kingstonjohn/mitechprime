import request from './request'

const userService = {
    getUser: () => request.get('/user/info', {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("access-token")}`
        }
    }),
    updateProfileName: (data) => request.post('/user/profile/update-name', data),
    updateUserPassword: (data) => request.post('/user/profile/update-password', data),
    notificationOff: (data) => request.post('/user/notification/off', data),
}

export default userService