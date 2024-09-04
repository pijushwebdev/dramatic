import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const apiKey = process.env.DATA_API_KEY;

const headers= {
    'Content-Type': 'application/json',   
}


export const fetchData = async (url:string) => {

  // console.log("API key is:"+ apiKey);
  
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
