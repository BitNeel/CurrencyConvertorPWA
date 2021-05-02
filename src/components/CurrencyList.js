import React,{useEffect,useState,useRef} from 'react';
import {getCountries} from '../api';

export default function CurrencyList() {
    const [countries, setcountries] = useState({})
    const [filteredList, setFilteredList] = useState([])
    const searchInpref = useRef(null);

    useEffect(()=>{
        const getdata = async()=>{
            let {results}= await getCountries();
            setcountries(results);
            let clist = []
            Object.keys(results).forEach(key=> clist.push(results[key]))
            setFilteredList(clist)
        }
        getdata();
        return ()=>{
            setcountries({});
        }
    },[])

    const searchcountry = (e)=>{
      let searchTerm = e.target.value;
      let allcountries = Object.keys(countries).map(key=>countries[key]);
      if(searchTerm !== ''){
        let filteredCountries = allcountries.filter(obj=> obj.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredList(filteredCountries);
        searchInpref.current.value=searchTerm
      }
      else{
        setFilteredList(allcountries)
      }
    }  
   
    return (
      <div className="container-md">
        <input className='form-control mt-2' id='searchCountry' ref={searchInpref} onChange={searchcountry} placeholder='country name'/>
        {filteredList.length===0?<div className="loader mx-auto"></div>:
        <table className="table table-responsive">
          <thead>
              <tr>
                <th scope="col" className="text-center col-4">CountryName</th>
                <th scope="col" className="text-center col-4">CurrencyName</th>
                <th scope="col" className="text-center col-4">Symbol</th>
              </tr>
          </thead>
          <tbody>
            {filteredList.map((cobj, index) => (
              <tr key={index}>
                <td className="text-center">{cobj.name}</td>
                <td className="text-center">{cobj.currencyName}</td>
                <td className="text-center">{cobj.currencySymbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
        }
      </div>
    );
}
