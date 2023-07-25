import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL + 'cvBulletPoint/';

class CvBulletPointService {
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

var instance = new CvBulletPointService();

export default instance;