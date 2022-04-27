import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(props) {

  let checkboxClick = () => {
    if (props.unit === 'C') {
      props.setUnit('F')
    }
    else {
      props.setUnit('C')
    }
  }

  return (
    <footer className={props.isHiddenOnMobile}>
      <div className="footer__line"></div>
      <div className="footer__wrapper">
        <Link className="footer__link" to="/adds">Search City</Link>
        <label className="checkbox">
          <input type="checkbox" checked={props.unit === 'C'} onChange={checkboxClick} />
          <span className="checkbox-switch" data-label-on="&deg;C" data-label-off="&deg;F"></span>
        </label>
        {props.city}
        {props.time}
      </div>
      <p className="footer__copyright">Powered by The Weather Channel</p>
    </footer>
  );
}

export default Footer;
