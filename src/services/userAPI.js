import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL + 'user/';

class UserService {
  get() {
    return axios.get(BASE_URL);
  }

  update(userData) {
    return axios.post(BASE_URL, userData);
  }
}

var instance = new UserService();

export default instance;