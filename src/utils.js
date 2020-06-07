import axios from "axios"

function axiosInstance(){
  let config =  JSON.parse(localStorage.getItem("user"))?{
        baseURL: 'http://localhost:8080/api/v1',
     headers: {  'Authorization': "Bearer "+JSON.parse(localStorage.getItem("user")).token,
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin': "**"}
    }:{
        baseURL: 'http://localhost:8080/api/v1'

    }

    console.log(config)

    return axios.create(config)

}

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/v1',

  });

  export {
      instance,
      axiosInstance
  }