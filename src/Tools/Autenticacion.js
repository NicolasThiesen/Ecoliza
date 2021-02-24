export const isAuthenticated = () => {
  const isloged = !!localStorage.getItem('token')
  if (isloged) {
    return true
  } else {
    return false
  }
}
