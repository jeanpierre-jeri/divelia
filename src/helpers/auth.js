export const user = () => JSON.parse(localStorage.getItem('user')) || ''

export const setUser = (user) => localStorage.setItem('user', JSON.stringify(user))
