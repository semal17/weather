import { useState, useEffect } from 'react';


import Spinner from '../Spinner/Spinner';
import './CityCard.css';



function CityCard(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude={part}&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025`)
    .then(res => res.json())
    .then(
      (result) => {
        setItems(result);
        setIsLoaded(true);
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
    )
}, [])

if (error) {
  return <section className="container">
    <p>Ошибка.</p>
  </section>;
}
else if (!isLoaded) {
  return <section className="container">
    <Spinner />
  </section>;
}
else {
  console.log(items);
  return (
    <section className="personal-card">
      <div className="personal-card__wrapper">
        <p className="personal-card__wheather">{items.current.weather[0].main}</p>
        <p className="personal-card__temp">{Math.round(items.current.temp)}&deg;</p>
        <p className="personal-card__text">Today, 
        <span className="personal-card__today"> {items.current.weather[0].main} </span>
         currently. It’s <span className="personal-card__today">{Math.round(items.current.temp)}&deg; </span> 
         and the high will be 
        <span className="personal-card__today"> {Math.round(items.current.temp)}&deg;</span>.</p>
  <p className="personal-card__city">{items.timezone}</p>
      </div>
    </section>
  );
}  
}

export default CityCard;