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

  let [latitude, setLatitude] = useState(51.514244);
  let [longitude, setLongitude] = useState(7.468429);

  let geoFindMe = () => {
    let geoOk = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);        
    }

    let geoError = () => {
        console.log('error');
    }
    if (!navigator.geolocation) {
        console.log(2);
    } else {
        navigator.geolocation.getCurrentPosition(geoOk, geoError);
    }
}
geoFindMe();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main latitude={latitude} longitude={longitude} onPicking={ (lat, lon, country, city ) => {
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
