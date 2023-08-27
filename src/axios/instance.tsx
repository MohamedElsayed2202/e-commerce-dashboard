import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    // withCredentials: true,
})

// axiosInstance.interceptors.response.use(res => res, error => {
//     console.log(error.response.data);
//     console.log(error.response.status);
//     console.log(error.response);
    
// })

export default axiosInstance;