
import './Header.css';
import logo from '../../images/logo.png';

import Search from '../Search/Search';


function Header(props) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let weekDay = new Date().getDay();
  const search = 'search';

  return (
    <header className="header container">
      <div className="header__wrapper">
        <div className="header-logo__wrapper">
          {props.arrow}
          <img className="header-logo__img" src={logo} alt="" />
          <p className={props.styles}>{props.text}</p>
        </div>
        <Search classSearch={search} search={props.search} setSearch={props.setSearch} setLat={props.setLat} setLon={props.setLon}
          setCountry={props.setCountry} setCity={props.setCity} />
      </div>
      <div className={props.isHiddenDay}>
        <div className="header-day__text-wrapper">
          {props.arrow}
          <p className="header-day__text">{props.headerText}</p>
        </div>
        <p className="header-day__week">{days[weekDay]}</p>
        {props.adds}
      </div>
    </header>
  );
}

export default Header;

