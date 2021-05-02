import React, { useEffect, useState } from "react";
import { getCurrencies } from "./api";
import AppHeader from "./components/AppHeader";
import ConvertorForm from "./components/ConvertorForm";
import CurrencyList from "./components/CurrencyList";
import "./App.css";
function App() {
  const [countryList, setcountryList] = useState({});
  const [toggle, setToggle] = useState(0);
  const [apierror, setAPIError] = useState("");
  useEffect(() => {
    const catchCountries = async () => {
      let { results } = await getCurrencies();
      setcountryList(results);
    };
    try {
      catchCountries();
    } catch (exception) {
      setAPIError("Something Went wrong");
    }
  }, []);
  return (
    <React.Fragment>
      <AppHeader setToggle={setToggle} />
      {apierror ? (
        <span>{apierror}</span>
      ) : (
        <>
          {!toggle ? (
            <ConvertorForm countryList={countryList} />
          ) : (
            <CurrencyList />
          )}
        </>
      )}
    </React.Fragment>
  );
}

export default App;
