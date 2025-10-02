import axios from "axios";

const instance = axios.create({
    baseURL: 'https://e-commerce-d2rw.onrender.com'
    
});

const token = localStorage.getItem('token')
if (token){
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
instance.defaults.baseURL = 'https://e-commerce-d2rw.onrender.com'
export default instance;