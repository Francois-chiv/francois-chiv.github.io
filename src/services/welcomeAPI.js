import axios from 'axios';

const BASE_URL = 'http://localhost:3001/welcome/';

class WelcomeService {
  getData() {
    return axios.get(BASE_URL);
  }
}

export default new WelcomeService();