import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState, useEffect } from 'react';

import Main from './pages/Main/Main';
import City from './pages/City/City';
import Adds from './pages/Adds/Adds';
import Error from './pages/Error/Error';


function App() {
  let [lat, setLat] = useState(55.7522);
  let [lon, setLon] = useState(37.6156);
  let [country, setCountry] = useState('RU');
  let [city, setCity] = useState('Moscow');
  let [unit, setUnit] = useState('C');

  let latitude= 1;
  let longitude=2;

  useEffect(() => {
    const initialUnit = localStorage.getItem("unit");
    setUnit(initialUnit)
  }, []);

  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <Main
            latitude={latitude}
            longitude={longitude}
            unit={unit}
            setUnit={setUnit}
            onPicking={ (lat, lon, country, city ) => {
          setLat(lat);
          setLon(lon);
          setCountry(country);
          setCity(city);
        }
        }/>
        } />
        <Route path="city" element={<City lat={lat} lon={lon} country={country} city={city} />} />
        <Route path="adds" element={<Adds country={country} city={city} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
