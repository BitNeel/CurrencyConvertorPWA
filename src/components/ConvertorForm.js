import React,{useState} from "react";
import {getExchangeAmount} from '../api';

export default function ConvertorForm({countryList}) {
  const [fromCountry,setFromCountry]=useState('USD');
  const [toCountry,setToCountry] = useState('');
  const [fromAmt,setFromAmt] = useState(1);
  const [toAmt,setToAmt] = useState(1);
  const [exRate,setExRate] = useState('');
  const checkChange = (er)=>{
    if(toAmt!==null && fromAmt!=null)
    {
      let result = Math.round(fromAmt*er*100)/100;
      setToAmt(result);
    }
  }

  const handleToCountryChange = async (e)=>{
      setToCountry(e.target.value);
      let exchange = await getExchangeAmount(fromCountry+"_"+e.target.value);
      let [exchangeRate] = Object.values(exchange)
      setExRate(exchangeRate);
      checkChange(exchangeRate);
      console.log(exchange)
  }
  const handleFromCountryChange = async (e)=>{
    setFromCountry(e.target.value);
    let exchange = await getExchangeAmount(e.target.value+"_"+toCountry);
    let [exchangeRate] = Object.values(exchange)
    setExRate(exchangeRate);
    checkChange(exchangeRate);
      console.log(exchange)
  }
  const handleToAmtChange = async (e)=>{
    setToAmt(e.target.value);
    if(exRate!==null)
    {
      let famount = e.target.value/exRate;
      let fresult = Math.round(famount*100)/100;
      setFromAmt(fresult);
    }

  }
  const handleFromAmtChange = async (e)=>{
    setFromAmt(e.target.value);
    if(exRate!=null){
      let tamount = Math.round(e.target.value*exRate*100)/100;
      setToAmt(tamount);
    }
  }

  let options = Object.keys(countryList).map((ccod, index) => {
    return (
      <option value={countryList[ccod].currencyId} key={index}>
        {countryList[ccod].currencyName}
      </option>
    );
  });
  options.unshift(<option key="9999">select..</option>)
  return (
    <div className="container-md">
      <div className="input-group mb-3 mt-3">
        <input type="number" className="form-control mr-2" name="fromField" 
        value={fromAmt} onChange={ handleFromAmtChange }/>
        <select name="selectFrom" id="fromsel" className="col-3" 
        onChange={ handleFromCountryChange} value={fromCountry}>
            {options}
        </select>
      </div>
      <div className="input-group mb-3">
        <input type="number" className="form-control mr-2" name="toField" 
        value={toAmt} onChange={ handleToAmtChange }/>
        <select name="selectTo" id="tosel" className="col-3" 
        onChange={ handleToCountryChange } value={toCountry}>
            {options}
        </select>
      </div>
    </div>
  );
}
