import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';

import Main from './pages/Main/Main';
import City from './pages/City/City';
import Adds from './pages/Adds/Adds';
import Error from './pages/Error/Error';
 

function App() {  
  let [lat, setLat] = useState(55.7522);
  let [lon, setLon] = useState(37.6156);
  let [country, setCountry] = useState('RU');
  let [city, setCity] = useState('Moscow');
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main onPicking={ (lat, lon, country, city ) => {
          setLat(lat);
          setLon(lon);
          setCountry(country);
          setCity(city);
        }
        }/>} />
        <Route path="city" element={<City lat={lat} lon={lon} country={country} city={city} />} />
        <Route path="adds" element={<Adds country={country} city={city} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
