import React,{useEffect,useState} from "react";
import {getCurrencies} from './api';
import AppHeader from './components/AppHeader'
import ConvertorForm from './components/ConvertorForm';
import CurrencyList from './components/CurrencyList';
import './App.css';
function App() {
  const [countryList, setcountryList] = useState({})
  const [toggle,setToggle] = useState(0);
  useEffect(
    ()=>{
      const catchCountries = async ()=>{ 
        let {results} = await getCurrencies();
        setcountryList(results);
      };
      catchCountries();
    }
  ,
  []
  )
  return (
    <React.Fragment>
    <AppHeader setToggle={setToggle}/>
    {
      toggle===0?<ConvertorForm countryList={countryList}/>:
      <CurrencyList/>
    }
    </React.Fragment>
  );
}

export default App;
