import axios from 'axios';



const axiosClient = axios.create({
    API: process.env.REACT_APP_API
});




export default axiosClient;