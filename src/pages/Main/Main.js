import { Link } from 'react-router-dom';


import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import TimeNow from '../../components/TimeNow/TimeNow';

function Main(props) {

  const hiddenOnMobile = 'footer  container';
  const hiddenDay = "header-day";
  const logoText = 'Weather';
  const styleText = 'header-logo__text'; 
  const headerTitle = 'Today';
  const timeClass = 'time-now time--none';
  const timeNow = <TimeNow displayNone={timeClass}/>;
  const headerAdds = <Link to="/adds" className="header-day__link">
  <svg className="header-day__link-img" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13.365" cy="13.365" r="11.865" stroke="#0076FF" strokeWidth="3" />
      <path d="M12.945 6V19.89" stroke="#0076FF" strokeWidth="3" />
      <path d="M19.89 12.945L6 12.945" stroke="#0076FF" strokeWidth="3" />
  </svg>
</Link>;

  return (
    <>
      <Header isHiddenDay={hiddenDay} text={logoText} styles={styleText} headerText={headerTitle} adds={headerAdds}/>
      <Cards onPicking={ (lat, lon, country, city) => props.onPicking(lat, lon, country, city)}/>
      <Footer isHiddenOnMobile={hiddenOnMobile} time={timeNow} />
    </>
  );
}

export default Main;