import './Location.css';

function Location({ items, unit }) {

  function convertToF(celsius) {
    return Math.round(celsius * 9 / 5 + 32);
  }

  function handleTemperature(temp) {
    if (unit === 'C') {
      return temp;
    } else {
      return convertToF(temp);
    }
  }

  let location = items.slice(0, 2);
  let contact = items.slice(2, 4);

  return (
    <section className="location">
      <div className="location__wrapper">
        <div className="location__wrapper-text">
          <h2 className="location__title">Nearby</h2>
          <p className="location__text">Location Services</p>
        </div>
        <ul className="location__list">
          {location.map(item => <li key={item.city.id} className="location__item">
            <p className="location__temp">{handleTemperature(Math.round(item.list[0].main.temp))}&deg;</p>
            <img className="location__img" width="40" height="40" src={require(`../../images/icons/${item.list[0].weather[0].icon}.svg`)} alt='weather icon' />
            <p className="location__city">{item.city.name}</p>
          </li>
          )}
        </ul>
      </div>

      <div className="location__wrapper location__wrapper--margin-top">
        <div className="location__wrapper-text">
          <h2 className="location__title">Contacts</h2>
        </div>
        <ul className="location__list">
          {contact.map(item => <li key={item.city.id} className="location__item">
            <p className="location__temp">{handleTemperature(Math.round(item.list[0].main.temp))}&deg;</p>
            <img className="location__img" width="40" height="40" src={require(`../../images/icons/${item.list[0].weather[0].icon}.svg`)} alt='weather icon' />
            <p className="location__city">{item.city.name}</p>
          </li>
          )}
        </ul>
      </div>
    </section>
  );
}


export default Location;
