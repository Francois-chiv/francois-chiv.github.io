import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL + 'bulletPoint/';

class BulletPointService {
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

var instance = new BulletPointService();

export default instance;