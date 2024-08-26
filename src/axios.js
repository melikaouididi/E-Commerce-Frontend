import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8081/api/v1'
    //baseURL: 'http://localhost:8081/api/v1'
});

const token = localStorage.getItem('token')
if (token){
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance;

