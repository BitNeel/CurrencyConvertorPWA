import axios from 'axios';

async function getCurrencies(){
    let URL = process.env.REACT_APP_API_URL+"/currencies"
    let apiKey = process.env.REACT_APP_API_KEY;
    let {data} = await axios.get(URL,{
        params:{
            'apiKey':apiKey
        }
    });
    return data;
}
async function getExchangeAmount(pair){
    let URL=process.env.REACT_APP_API_URL+"/convert";
    let apiKey = process.env.REACT_APP_API_KEY;
    try{
        let {data} = await axios.get(URL,{
            params:{
                q:pair,
                apiKey:apiKey,
                compact:'ultra'
            }
        })
        return data;
    }
    catch(e){
        console.log(e);
    }
    
}
async function getCountries(){
    const URL = process.env.REACT_APP_API_URL+"/countries";
    const apiKey = process.env.REACT_APP_API_KEY;
    try{
        let {data} = await axios.get(URL,{
            params:{
                apiKey:apiKey
            }
        });
        return data;
    }
    catch(e){
        console.log(e);
    }
}
export {getCurrencies,getExchangeAmount,getCountries};