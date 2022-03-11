

import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';

function Main() {

  const hiddenOnMobile  = 'footer  container';
  const hiddenDay = "header-day";
const logoText = 'Weather';
const styleText = 'header-logo__text';


  return (
    <>
      <Header isHiddenDay={hiddenDay} text={logoText}  style={styleText} />
      <Cards />
      <Footer isHiddenOnMobile={hiddenOnMobile} />
    </>
  );
}

export default Main;