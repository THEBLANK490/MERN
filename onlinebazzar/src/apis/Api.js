import axios from 'axios';

const Api =axios.create({
    baseURL : "http://localhost:5000",
    withCredentials: true,
    headers:{
        'Contetnt-Type':'application/json',
    },
});

//creating Route
export const testApi = () => Api.get('/');

//register route
export const registerApi = (data)=> Api.post("api/user/register",data);

//login route
export const loginApi =(data)=> Api.post("api/user/login",data)