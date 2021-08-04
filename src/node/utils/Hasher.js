export const hashPassword = (password) => {
    return password;
}

export const verifyPassword = (password, hash) => {
    return password === hash;
}