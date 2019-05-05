const initState = {
  user: [],
  auth: [],
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_USER':
      console.log('sign in successful', action.response);
      let auth = action.response.data.user;
      localStorage.setItem('user', JSON.stringify(action.response.data.user));
      console.log(auth);
      return {
        ...state,
        authError: null,
        auth,
      }
    case 'SIGNIN_USER_ERROR':
      console.log('sign in error', action.error);
      return state;
    case 'SIGNUP_USER':
      console.log('sign up successful', action.response);
      return {
        ...state,
        authError: null,
        auth: action.response.data.user,
      }
    case 'SIGNUP_USER_ERROR':
      console.log('sign up error', action.error);
      return state;                  
    default:
      return state;    
  }
}

export default authReducer;
