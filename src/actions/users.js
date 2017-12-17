import api from '../api'
import { userLoggedIn} from "./auth";

export const signup = date => dispatch =>
    api.user.signup(date).then(user => {
        localStorage.alhubJWT = user.token;
        dispatch(userLoggedIn(user))
    });