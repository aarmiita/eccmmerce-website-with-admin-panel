export const isLogggedIn = () => {
  /**
   * Cheak if  user is logged in
   */
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};
export const logout = () => {
  /**
   * clear localStorage
   */
  localStorage.clear();
  window.location.reload();
};
