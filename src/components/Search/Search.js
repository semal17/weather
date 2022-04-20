import { useRef } from 'react';
import { debounce } from "lodash";

import './Search.css';



function Search({ classSearch, search, setSearch }) {

  let input = useRef();


  let searchCity = debounce(() => {
    setSearch(input.current.value);
  }, 1500);

  console.log(search);

  return (
    <input className={classSearch} onInput={searchCity} ref={input} type="search" placeholder="Search City"></input>
  );
}

export default Search;

