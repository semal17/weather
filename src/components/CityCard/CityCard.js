import './CityCard.css';

function CityCard() {
  return (
    <section className="personal-card">
      <div className="personal-card__wrapper">
        <p className="personal-card__wheather">Mostly Sunny</p>
        <p className="personal-card__temp">54&deg;</p>
        <p className="personal-card__text">Today, <span className="personal-card__today">Mostly Sunny</span> currently. It’s <span className="personal-card__today">54&deg;</span> and the high will be <span className="personal-card__today">54&deg;</span>.</p>
      </div>
    </section>
  );
}

export default CityCard;