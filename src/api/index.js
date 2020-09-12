import axios from 'axios';

async function getCountries(){
    let URL = process.env.REACT_APP_API_URL+"/countries"
    let apiKey = process.env.REACT_APP_API_KEY;
    let {data} = await axios.get(URL,{
        params:{
            'apiKey':apiKey
        }
    });
    return data;
}

export {getCountries};