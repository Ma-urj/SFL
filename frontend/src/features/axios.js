import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sfl2023backend.onrender.com/'
});

export default instance;