import './City.css';


import Header from '../../components/Header/Header';
import CityCard from '../../components/CityCard/CityCard';
import Ours from '../../components/Ours/Ours';
import Week from '../../components/Week/Week';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';




function City() {
  return (
    <>      
    <Header />
    <main>
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
