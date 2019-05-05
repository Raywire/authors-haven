export const authStatus = () => {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return true;
    } else {
        return false;
    }
};
