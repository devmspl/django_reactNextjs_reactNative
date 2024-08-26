import axios from "axios"
import {ModeId} from "@/utils/utils"

 export const createUser=async(data:any)=>{
  try {
      const resoponse = await axios.post(`https://jobapi.localhost:4200/User/create`,data)
      console.log(resoponse)
     
      return resoponse
  } catch (error) {
    console.log(error)
    throw error;    
  }
}


 export const usersLogin=async(data:any)=>{ 
    try {
        const resoponse = await axios.post(`https://jobapi.localhost:4200/User/login?mode=${ModeId}`,data)
        console.log(resoponse)
       
        return resoponse
    } catch (error) {
      console.log(error)
      throw error;    
    }
}

export const getbyIdRole=async(id:any)=>{
    
    try {
        const resoponse = await axios.get(`https://jobapi.localhost:4200/roles/getById/${id}`)
        console.log(resoponse)
       
        return resoponse
    } catch (error) {
      console.log(error)
      throw error;    
    }
}


export const forgotPassword = async(data:any)=>{
  try {
    const resoponse = await axios.post("https://jobapi.localhost:4200/admin/forgot-password",data)
        console.log(resoponse)
        return resoponse
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export const verifyOTP = async(data:any)=>{
  try {
    const resoponse = await axios.post("https://jobapi.localhost:4200/admin/verifyOTP",data)
        console.log(resoponse)
        return resoponse
  } catch (error) {
    console.log(error)
    throw error;
  }
}
 