import request from './request'

const authService = {
    register: (data) => request.post('/auth/register', data),
    login: (data) => request.post('/auth/login', data),
    otpVerification: (data) => request.post('/auth/otp-verification', data),
    sendEmailOtp: (data) => request.post('/auth/send-email-otp', data),
    sendEmailOtpVerify: (data) => request.post('/auth/send-email-otp/verify', data),
    passwordRecovery: (data) => request.post('/auth/password-recovery', data),
    allReferralCodes: () => request.get('/auth/referral-codes'),
}

export default authService