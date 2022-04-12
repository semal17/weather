import './Week.css';

function Week({week}) {

  let daysWeek = ["Monday", "Tuesday",  "Wednesday",  "Thursday",  "Friday",  "Saturday", "Sunday"];
  let days = week.slice(0, 6);
  
  return (
    <section className="week">
      <ul className="week__list">
        {days.map(item => <li key={item.dt} className="week__item">
          <p className="week__name">{daysWeek[(new Date(item.dt * 1000)).getDay()]}</p>
          <div className="week__temp">
            <svg className="week__img" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 18.75C15.9518 18.75 18.75 15.9518 18.75 12.5C18.75 9.04822 15.9518 6.25 12.5 6.25C9.04822 6.25 6.25 9.04822 6.25 12.5C6.25 15.9518 9.04822 18.75 12.5 18.75Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M12.5 3.90625V0" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M12.5 25V21.0938" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M21.0938 12.5H25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M0 12.5H3.90625" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M18.75 6.25L20.7031 4.29688" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M4.29688 20.7031L6.25 18.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M18.75 18.75L20.7031 20.7031" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M4.29688 4.29688L6.25 6.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
            </svg>
            <p className="week__temp--max">{Math.round(item.temp.max)}&deg;</p>
            <p className="week__temp--min">{Math.round(item.temp.min)}&deg;</p>
          </div>
        </li>)}       
        
      </ul>
    </section>
  );
}

export default Week;