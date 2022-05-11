export const ERROR_LOGIN_FAIL = 'ERROR_LOGIN_FAIL'

export const displayErrorReason = (reason: string): string => {
    const map: Record<string, string> = {
        [ERROR_LOGIN_FAIL]: `login fail`
    }

    return map[reason]
}