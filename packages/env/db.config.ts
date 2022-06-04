export const DB_CONFIG = {
  product: {},
  identity: {
    username: process.env.USERNAME_IDENTITY_DB || 'root',
    password: process.env.PASSWORD_IDENTITY_DB || '123456',
    database: 'identity_db',
  },
  streaming: {},
}