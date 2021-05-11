import axios from "axios";

class LoginService {

    isUserLoggedIn() {
        if (sessionStorage.getItem('un') != null) {
            return true;
        }
        else{
           
        return false;
        }
    }
    logout() {
        sessionStorage.removeItem('un');
    }

    validate(credential) {
        return axios.post('authenticate', credential)
    }
    createAuth(token) {
        return 'Bearer ' + token;
    }
    onLogin(token) {
        sessionStorage.setItem('token', token)
        axios.interceptors.request.use(config => {
            if (this.isUserLoggedIn) {
                config.headers.Authorization = this.createAuth(sessionStorage.getItem('token'));
            }

            return config;
        })
    }
}

export default new LoginService();