import { useRef } from 'react';
import { debounce } from "lodash";
import { useNavigate } from 'react-router-dom';

import './Search.css';



function Search({ classSearch, search, setSearch }) {

  let input = useRef();
  const navigate = useNavigate();


  let searchCity = debounce(() => {
    setSearch(input.current.value);
    
    navigate('/city')
  }, 1500);

  console.log(search);

  return (
    <input className={classSearch} onInput={searchCity} ref={input} type="search" placeholder="Search City"></input>
  );
}

export default Search;

