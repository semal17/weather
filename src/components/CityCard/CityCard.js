import './CityCard.css';



function CityCard({items, country, city}) {
 
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
  <p className="personal-card__city">{city}, {country}</p>
      </div>
    </section>
  );
}  


export default CityCard;