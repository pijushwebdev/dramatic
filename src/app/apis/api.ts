import axios from "axios";
import { config } from "./config";

const BASE_URL = config.base_url;
const apiKey = config.api_key;

const headers= {
    'Content-Type': 'application/json',   
}

export const fetchData = async (url:string) => {

  // console.log("API key is:"+ apiKey);
  // console.log(url);
  if(!apiKey){
    throw new Error('API key is not Found');
  }

  try{

    const { data } = await axios.get(BASE_URL + url, 
      { 
      headers,
      params: {
        api_key: apiKey,
      },
    })
    
    // console.log(data);
    return data;

  }catch(error){
    // console.error('Error fetching data:', error);
    throw error;
  }

}
