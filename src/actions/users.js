import api from '../api'
import { userLoggedIn} from "./auth";
import { USER_FETCHED } from "../types";

export const userFetched = user => ({
   type: USER_FETCHED,
    user
});

export const signup = date => dispatch =>
    api.user.signup(date).then(user => {
        localStorage.alhubJWT = user.token;
        dispatch(userLoggedIn(user))
    });

export const fetchCurrentUser = () => dispatch =>
    api.user.fetchCurrentUser().then(user => dispatch(userFetched(user)));