import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Main from './pages/Main/Main';
import City from './pages/City/City';
import Adds from './pages/Adds/Adds';
import Error from './pages/Error/Error';




function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="city" element={<City />} />
        <Route path="adds" element={<Adds />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
