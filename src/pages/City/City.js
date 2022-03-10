import './City.css';
import { Link } from 'react-router-dom';



import Header from '../../components/Header/Header';
import CityCard from '../../components/CityCard/CityCard';
import Ours from '../../components/Ours/Ours';
import Week from '../../components/Week/Week';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';




function City() {
  const arrowHeader = <Link to="/" className="header__arrow">
    <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 2L3 14L15 26" stroke="#0076FF" strokeWidth="3" />
    </svg>
  </Link>;
  
  return (
    <>
      <Header arrow={arrowHeader} />
      <main className="container">
        <CityCard />
        <Ours />
        <Week />
        <Info />
      </main>
      <Footer />
    </>
  );
}

export default City;
