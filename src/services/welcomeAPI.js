import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL + 'welcome/';

class WelcomeService {
  getData() {
    return axios.get(BASE_URL);
  }
}

var instance = new WelcomeService();

export default instance;