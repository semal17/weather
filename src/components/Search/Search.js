import { useRef } from 'react';

import './Search.css';



function Search({ classSearch, search, setSearch }) {

  let input = useRef();
  // let changeSearch = () => {
  //   console.log(input.current.value);
  // }

  let searchCity = (e) => {
    if (e.key === 'Enter') {
      setSearch(input.current.value);
    }
  }


  console.log(search);
  return (
    <input className={classSearch}  onKeyDown={searchCity} ref={input} type="search" placeholder="Search City"></input>
  );
}

export default Search;

