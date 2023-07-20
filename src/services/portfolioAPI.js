import axios from 'axios';

const BASE_URL = 'http://localhost:3001/portfolio/';

class PortfolioService {
    create(data) {
        return axios.post(BASE_URL, data);
    }

    getAll() {
        return axios.get(BASE_URL);
    }

    update(id, data) {
        return axios.post(BASE_URL+id, data);
    }

    delete(id) {
        return axios.delete(BASE_URL + id);
    }
}

export default new PortfolioService();