export enum UserTokenType {
  UserActivation = 'USER_ACTIVATION',
  UserForgotPassword = 'USER_FORGOT_PASSWORD',
  GoogleAuth = 'GOOGLE_AUTH',
  Impersonate = 'IMPERSONATE',
  UserCommon = 'USER_COMMON',
  QRCodeURL = 'QR_CODE',
  TimeOff = 'TIME_OFF',
  GoogleDrive = 'GOOGLE_DRIVE',
}

export const getUserSessionCacheKey = (userId: string) => `user_session:${userId}`
