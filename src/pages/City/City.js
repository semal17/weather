import './City.css';
import { Link } from 'react-router-dom';



import Header from '../../components/Header/Header';
import CityCard from '../../components/CityCard/CityCard';
import Hours from '../../components/Hours/Hours';
import Week from '../../components/Week/Week';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';




function City() {
  const arrowHeader = <Link to="/" className="header__arrow">
    <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 2L3 14L15 26" stroke="#0076FF" strokeWidth="3" />
    </svg>
  </Link>;

  const hiddenOnMobile  = 'footer  container footer--none';
  const hiddenDay = 'header-day heder-day--none';
  const logoText = 'Wednesday, January 23';
  const styleText = 'header-logo__text header-logo__text--size';
  
  return (
    <>
      <Header arrow={arrowHeader} isHiddenDay={hiddenDay} text={logoText} style={styleText} />
      <main className="container city-wrapper">
        <CityCard />
        <Hours />
        <Week />
        <Info />
      </main>
      <Footer isHiddenOnMobile={hiddenOnMobile}/>
    </>
  );
}

export default City;
