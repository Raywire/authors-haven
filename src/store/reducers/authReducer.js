const initState = {
  user: [],
  auth: [],
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_USER':
      console.log('sign in successful', action.response);
      const auth=action.response.data.user;
      console.log(auth);
      return action.response;
    case 'SIGNIN_USER_ERROR':
      console.log('sign in error', action.error);
      return state;            
    default:
      return state;    
  }
}

export default authReducer;
