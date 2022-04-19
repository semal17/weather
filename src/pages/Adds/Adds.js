import './Adds.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import Result from '../../components/Result/Result';
import Location from '../../components/Location/Location';
import Footer from '../../components/Footer/Footer';
import TimeNow from '../../components/TimeNow/TimeNow';
import Search from '../../components/Search/Search';
import Spinner from '../../components/Spinner/Spinner';

function Adds({ latitude, longitude, unit, setUnit, search, setSearch }) {


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  let [city, setCity] = useState('Moscow');
  let [country, setCountry] = useState('RU');

  const hiddenOnMobile = 'footer container footer--none';
  const hiddenDay = 'header-day heder-day--none';
  const logoText = 'Weather';
  const styleText = 'header-logo__text header-logo__text--size';
  const headerTitle = 'Add City';
  const timeClass = 'time-now';
  const searching = 'search search--mobile';
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


  useEffect(() => {
    Promise.all([fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude - 2}&lon=${longitude}&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025`),
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude - 2}&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025`),
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=Moscow&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025"),
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=Saint%20Petersburg&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025"),
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025`)])
      .then(res => Promise.all(res.map(r => r.json())))
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
          setCity(result[4].city.name);
          setCountry(result[4].city.country);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }, [latitude, longitude])

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
      <>
        <Header arrow={arrowHeader} isHiddenDay={hiddenDay} text={logoText} styles={styleText} headerText={headerTitle} adds={timeNow} search={search} setSearch={setSearch} />
        <main className="container">
          <Result />
          <Location items={items} unit={unit} />
        </main>
        <Footer isHiddenOnMobile={hiddenOnMobile} city={addCity} time={timeNow} setUnit={setUnit} unit={unit} />
      </>
    );
  }
}

export default Adds;
