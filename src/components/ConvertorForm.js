import React from "react";

export default function ConvertorForm({countryList}) {
    let options = Object.keys(countryList).map((ccod,index)=>{
    return <option value={countryList[ccod].currencyId} key={index}>{countryList[ccod].currencyName}</option>
    })
  return (
    <div className="container-md">
      <div className="input-group mb-3 mt-3">
        <input type="number" className="form-control mr-2" name="fromField" placeholder="from"/>
        <select name="selectFrom" id="fromsel" className="col-3">
            {options}
        </select>
      </div>
      <div className="input-group mb-3">
        <input type="number" className="form-control mr-2" name="toField" placeholder="to"/>
        <select name="selectTo" id="tosel" className="col-3">
            {options}
        </select>
      </div>
    </div>
  );
}
