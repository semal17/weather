import './CityCard.css';



function CityCard({ items, country, city, day, unit }) {

  function convertToF(celsius) {
    return Math.round(celsius * 9/5 + 32);
  }

  function handleTemperature (temp) {
    if (unit === 'C') {
      return temp;
    } else {
      return  convertToF(temp);
    }
  }


  return (
    <section className="personal-card">
      <div className="personal-card__wrapper">
        <p className="personal-card__wheather">{items.current.weather[0].main}</p>
        <p className="personal-card__temp">{handleTemperature(Math.round(items.current.temp))}&deg;</p>
        <p className="personal-card__text">Today,
        <span className="personal-card__today"> {items.current.weather[0].main} </span>
         currently. It’s <span className="personal-card__today">{handleTemperature(Math.round(items.current.temp))}&deg; </span>
         and the high will be
        <span className="personal-card__today"> {handleTemperature(Math.round(day.temp.max))}&deg;</span>.</p>
        <p className="personal-card__city">{city}, {country}</p>
      </div>
    </section>
  );
}


export default CityCard;
