import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom";

export const loginRequest = async (body) => {

   
    try {
        const response = await axios.post('http://localhost:3000/api/login',body)
      
        .then (response => {
         
return response 
        })
        return await response.data;
    } catch (error) {
        return error
    }
}

export const registerRequest = async (body) => {
    try {
        const response = await axios.post('http://localhost:3000/api/register',body);
        return response.data;
    } catch (error) {
        return error
    }
}