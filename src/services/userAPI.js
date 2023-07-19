import axios from 'axios';

const BASE_URL = 'http://localhost:3001/user/';

class UserService {
  getUser() {
    return axios.get(BASE_URL);
  }

  updateUser(userData) {
    return axios.post(BASE_URL, userData);
  }
}

export default new UserService();