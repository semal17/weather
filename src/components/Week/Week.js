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
          <img className="week__img" width="25" height="25" src={require(`../../images/icons/${item.weather[0].icon}.svg`)} alt='weather icon' />             
            <p className="week__temp--max">{Math.round(item.temp.max)}&deg;</p>
            <p className="week__temp--min">{Math.round(item.temp.min)}&deg;</p>
          </div>
        </li>)}       
        
      </ul>
    </section>
  );
}

export default Week;