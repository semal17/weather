import { useRef } from 'react';
import { debounce } from "lodash";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Search.css';



function Search({ classSearch, search, setSearch, setLat, setLon, setCountry, setCity }) {

  let input = useRef();
  const navigate = useNavigate();

  let searchCity = debounce(() => {
    setSearch(input.current.value);
  }, 1000);

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          if (result.cod === "200") {
            setLat(result.city.coord.lat);
            setLon(result.city.coord.lon);
            setCountry(result.city.country);
            setCity(result.city.name);
            navigate('/city');
          }
        })
    return () => setSearch('');
  }, [search]);

  return (
    <input className={classSearch} onInput={searchCity} ref={input} type="search" placeholder="Search City"></input>
  );
}

export default Search;

