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
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main onPicking={ (lat, lon ) => {
          setLat(lat);
          setLon(lon);
        }
        }/>} />
        <Route path="city" element={<City lat={lat} lon={lon} />} />
        <Route path="adds" element={<Adds />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
