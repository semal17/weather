import './Cards.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';



function Cards(props) {
  // const [arr, setArr] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    Promise.all([fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.latitude}&lon=${props.longitude}&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025`),
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Karabanovo&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025"),
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Saint%20Petersburg&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025"),
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Moscow&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025")])
      .then(res => Promise.all(res.map(r => r.json())))
      .then(
        (result) => {
          setItems(result);
          // setArr([...arr, result]);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }, [props.latitude, props.longitude])

  if (error) {
    return <section className="cards container">
      <p>Ошибка.</p>
    </section>;
  }
  else if (!isLoaded) {
    return <section className="cards container">
      <Spinner />
    </section>;
  }
  else {

    return (
      <section className="cards container">
        <ul className="cards__wrapper">
          {items.map((item, index) => <Card key={item.city.id + index} unit={props.unit} weather={item} onPicking={() => props.onPicking(item.city.coord.lat, item.city.coord.lon, item.city.country, item.city.name)} />)}
          <li className="card card__add">
            <Link to="/adds">
              <div className="card__adds">
                {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="8" stroke="#0076FF" strokeWidth="2" />
                  <path d="M8.96191 4.15384V13.77" stroke="#0076FF" strokeWidth="2" />
                  <path d="M13.7698 8.96193L4.15362 8.96193" stroke="#0076FF" strokeWidth="2" />
                </svg> */}
                <p className="card__adds--text">Search City</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}

export default Cards;
