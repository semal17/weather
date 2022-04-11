import './Hours.css';

function Hours({items}) {
  let hours = items.slice(1, 10);
  let firstHour = items.slice(0, 1);
  console.log(Date.now());

  return (
    <section className="hours">
      <div className="week-day">
        <p className="week-day__name">Wednesday</p>
        <div className="week-day__temp">
          <p className="week-day__temp--max">54&deg;</p>
          <p className="week-day__temp--min">54&deg;</p>
        </div>
      </div>
      <ul className="hours__list">
      {firstHour.map(item => <li key={item.dt} className="hours__item hours__item--active">
          <p className="hours__time hours__time--active">Now</p>
          <svg className="hours__img" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 26.25C22.3325 26.25 26.25 22.3325 26.25 17.5C26.25 12.6675 22.3325 8.75 17.5 8.75C12.6675 8.75 8.75 12.6675 8.75 17.5C8.75 22.3325 12.6675 26.25 17.5 26.25Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M17.5 5.46875V0" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M17.5 35V29.5312" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M29.5312 17.5H35" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M0 17.5H5.46875" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M26.25 8.75L28.9844 6.01562" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M6.01562 28.9844L8.75 26.25" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M26.25 26.25L28.9844 28.9844" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M6.01562 6.01562L8.75 8.75" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
          </svg>
          <p className="hours__temp">{Math.round(item.temp)}&deg;</p>
        </li> )}

        {hours.map(item => <li key={item.dt} className="hours__item">
          <p className="hours__time hours__time--active">{item.dt.toLocaleString()}</p>
          <svg className="hours__img" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 26.25C22.3325 26.25 26.25 22.3325 26.25 17.5C26.25 12.6675 22.3325 8.75 17.5 8.75C12.6675 8.75 8.75 12.6675 8.75 17.5C8.75 22.3325 12.6675 26.25 17.5 26.25Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M17.5 5.46875V0" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M17.5 35V29.5312" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M29.5312 17.5H35" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M0 17.5H5.46875" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M26.25 8.75L28.9844 6.01562" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M6.01562 28.9844L8.75 26.25" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M26.25 26.25L28.9844 28.9844" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M6.01562 6.01562L8.75 8.75" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
          </svg>
          <p className="hours__temp">{Math.round(item.temp)}&deg;</p>
        </li> )}
      </ul>
    </section>
  );
}

export default Hours;