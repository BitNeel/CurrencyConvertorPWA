import React,{useEffect,useState} from 'react';
import {getCountries} from '../api';

export default function CurrencyList() {
    const [countries, setcountries] = useState({})
    useEffect(()=>{
        const getdata = async()=>{
            let {results}= await getCountries();
            setcountries(results);
        }
        getdata();
        return ()=>{
            setcountries({});
        }
    },
    [])
    return (
      <div className="container-md">
        {Object.keys(countries).length===0?<div className="loader mx-auto"></div>:
        <table className="table table-responsive">
          <thead>
              <tr>
                <th scope="col" className="text-center col-4">CountryName</th>
                <th scope="col" className="text-center col-4">CurrencyName</th>
                <th scope="col" className="text-center col-4">Symbol</th>
              </tr>
          </thead>
          <tbody>
            {Object.keys(countries).map((ccode, index) => (
              <tr key={index}>
                <td className="text-center">{countries[ccode].name}</td>
                <td className="text-center">{countries[ccode].currencyName}</td>
                <td className="text-center">{countries[ccode].currencySymbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
        }
      </div>
    );
}
