import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';

function Main() {

  const hiddenOnMobile = 'footer  container';
  const hiddenDay = "header-day";
  const logoText = 'Weather';
  const styleText = 'header-logo__text';

  const [date, setDate] = useState(new Date());
  let ours = date.getHours();
  let minutes = date.getMinutes();
  useEffect(() => {
    const updateTime = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(updateTime);
  });


  return (
    <>
      <Header isHiddenDay={hiddenDay} text={logoText} style={styleText} />
      <Cards />
      <Footer isHiddenOnMobile={hiddenOnMobile} our={ours} minute={minutes} />
    </>
  );
}

export default Main;