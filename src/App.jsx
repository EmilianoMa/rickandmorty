import { useState, useEffect } from "react";
import useFetch from "./hook/useFetch";
import randomNumber from "./utils/randomNumber";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import Characters from "./components/Characters";
import InputSearch from "./components/InputSearch";
import Error from "./components/Error";

function App() {
  const [locationNumber, setLocationNumber] = useState(randomNumber(126));

  const url = `https://rickandmortyapi.com/api/location/${locationNumber}`;

  const [location, getLocation, hasError] = useFetch(url);

  useEffect(() => {
    getLocation();
  }, [locationNumber]);

  return (
    <>
      <div className="app">
        <header className="header__app">
          <div className="content__header-img">
            <img src="/header.jpg" alt="" />
          </div>
        </header>

        <InputSearch setLocationNumber={setLocationNumber} />

        {hasError ? (
          <Error />
        ) : (
          <>
            <LocationInfo location={location} />
            <div className="characters">
              {location?.residents.map((url) => (
                <Characters url={url} key={url} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
