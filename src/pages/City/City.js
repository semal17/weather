import './City.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Spinner from '../../components/Spinner/Spinner';
import Header from '../../components/Header/Header';
import CityCard from '../../components/CityCard/CityCard';
import Hours from '../../components/Hours/Hours';
import Week from '../../components/Week/Week';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';
import TimeNow from '../../components/TimeNow/TimeNow';


function City({ lat, lon, country, city, unit, setUnit, search, setSearch }) {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const hiddenOnMobile = 'footer  container footer--none';
  const hiddenDay = 'header-day heder-day--none';
  const styleText = 'header-logo__text header-logo__text--size';
  const timeClass = 'time-now';
  const timeNow = <TimeNow displayNone={timeClass} />;
  const arrowHeader = <Link to="/" className="header__arrow">
    <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 2L3 14L15 26" stroke="#0076FF" strokeWidth="3" />
    </svg>
  </Link>;

  const addCity = <div className="footer-city">
    <svg className="footer-city__img" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_9_175)">
        <path d="M13.5 11.8125C14.898 11.8125 16.0312 10.6792 16.0312 9.28125C16.0312 7.88328 14.898 6.75 13.5 6.75C12.102 6.75 10.9688 7.88328 10.9688 9.28125C10.9688 10.6792 12.102 11.8125 13.5 11.8125Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
        <path d="M22.3594 9.59133C22.3374 4.52672 18.3933 0.421875 13.5 0.421875C8.60667 0.421875 4.64062 4.52672 4.64062 9.59133C4.64062 16.1456 13.4852 26.5781 13.4852 26.5781C13.4852 26.5781 22.3885 16.1456 22.3594 9.59133Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
      </g>
      <defs>
        <clipPath id="clip0_9_175">
          <rect width="27" height="27" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <p className="footer-city__text">{city}, {country}</p>
  </div>;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025`)
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
  }, [lat, lon])

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
    let time = new Date(items.current.dt * 1000);
    let weekDay = days[time.getDay()];
    let logoText = `${weekDay}, ${months[time.getMonth()]} ${time.getDate()}`;

    return (
      <>
        <Header arrow={arrowHeader} isHiddenDay={hiddenDay} text={logoText} styles={styleText} headerText={city} adds={timeNow}
          search={search} setSearch={setSearch} />
        <main className="container city-wrapper">
          <CityCard items={items} country={country} city={city} day={items.daily[0]} unit={unit} />
          <Hours items={items.hourly} day={items.daily[0]} weekDay={weekDay} unit={unit} />
          <Week week={items.daily} unit={unit} />
          <Info items={items} unit={unit} />
        </main>
        <Footer isHiddenOnMobile={hiddenOnMobile} city={addCity} time={timeNow} setUnit={setUnit} unit={unit} />
      </>
    );
  }


}

export default City;
