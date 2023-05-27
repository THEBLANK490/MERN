import axios from 'axios';

const Api =axios.create({
    baseURL : "http://localhost:5000",
    withCredentials: true,
    headers:{
        'Content-Type':'multipart/form-data',
    },
});
console.log(`Bearer ${localStorage.getItem('token')}`);

const config = {
    headers:{
        'authorization':`Bearer ${localStorage.getItem('token')}`,
    }
}

//creating Route
export const testApi = () => Api.get('/');

//register route
export const registerApi = (data)=> Api.post("/api/user/register",data);

//login route
export const loginApi =(data)=> Api.post("/api/user/login",data)

//product route
export const addproductApi =(data)=> Api.post("/api/product/add",data,config)