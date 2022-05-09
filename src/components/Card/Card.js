import { Link } from 'react-router-dom';

import './Card.css';


function Card(props) {
  const unit = props.unit;

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
    <li className="card card-2" onClick={props.onPicking}>
      <Link to="/city">
        <div className="card__container">
          <div className="card__wrapper">
            <p className="card__weather">{props.weather.list[0].weather[0].main}</p>
            {/* <Time time={props.weather.list[0]} /> */}
          </div>
          <div className="card__temp">
            <p className="card__num">{handleTemperature(Math.round(props.weather.list[0].main.temp))}&deg;</p>
          </div>
          <p className="card__location">{props.weather.city.name}</p>
        </div>
      </Link>
    </li>
  );
}

export default Card;
