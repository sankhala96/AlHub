import api from '../api'
import { userLoggedIn} from "./auth";

export const signup = date => dispatch =>
    api.user.signup(date).then(user =>
        dispatch(userLoggedIn(user))
    );