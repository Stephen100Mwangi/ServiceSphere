const logoutUser = async (req, res) => {
  try {
    localStorage.removeItem ('serviceToken', data.token);
    localStorage.removeItem ('serviceUser', JSON.stringify (data.user));
  } catch (error) {
    console.error ('Logout error:', error);
    return res.status (500).json ({message: 'Internal server error'});
  }
};

export default logoutUser;
