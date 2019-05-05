import axios from 'axios';

const configUrls = {
  root: 'http://127.0.0.1:8000/api/users/login/',
  resetlink: '',
};

export const signInUser = (user) => {
    return (dispatch, getState) => {
      // make async call to database
      console.log(user)
      axios.post(configUrls.root,
        { user },
        )
      .then(function (response) {
        console.log(response.data);
        dispatch({ type: 'SIGNIN_USER', response });
      })
      .catch(function (error) {
        console.log(error);
        dispatch({ type: 'SIGNIN_USER_ERROR', error });
      });
    }
  };
