import './Hours.css';


function Hours({ items, day, weekDay, unit }) {

  let hours = items.slice(1, 10);
  let firstHour = items.slice(0, 1);

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
    <section className="hours">
      <div className="week-day">
        <p className="week-day__name">{weekDay}</p>
        <div className="week-day__temp">
          <p className="week-day__temp--max">{handleTemperature(Math.round(day.temp.max))}&deg;</p>
          <p className="week-day__temp--min">{handleTemperature(Math.round(day.temp.min))}&deg;</p>
        </div>
      </div>
      <ul className="hours__list">
        {firstHour.map(item => <li key={item.dt} className="hours__item hours__item--active">
          <p className="hours__time hours__time--active">Now</p>
          <img className="hours__img" width="35" height="35" src={require(`../../images/icons/${item.weather[0].icon}.svg`)} alt='weather icon' />
          <p className="hours__temp">{handleTemperature(Math.round(item.temp))}&deg;</p>
        </li>)}
        {hours.map(item => <li key={item.dt} className="hours__item">
          <p className="hours__time">{`${new Date(item.dt * 1000).getHours()}:00`}</p>
          <img className="hours__img" width="35" height="35" src={require(`../../images/icons/${item.weather[0].icon}.svg`)} alt='weather icon' />
          <p className="hours__temp">{handleTemperature(Math.round(item.temp))}&deg;</p>
        </li>)}
      </ul>
    </section>
  );
}

export default Hours;
