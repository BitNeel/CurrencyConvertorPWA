import React,{useEffect,useState} from "react";
import {getCountries} from './api';
import AppHeader from './components/AppHeader'
import ConvertorForm from './components/ConvertorForm';
import './App.css';
function App() {
  const [countryList, setcountryList] = useState({})
  useEffect(
    ()=>{
      const catchCountries = async ()=>{ 
        let {results} = await getCountries();
        setcountryList(results);
      };
      catchCountries();
    }
  ,
  []
  )
  return (
    <React.Fragment>
    <AppHeader/>
    <ConvertorForm countryList={countryList}/>
    </React.Fragment>
  );
}

export default App;
