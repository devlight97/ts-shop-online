import { createHash } from 'crypto'

export const md5 = (pwd: string) => createHash('md5').update(pwd).digest('hex')