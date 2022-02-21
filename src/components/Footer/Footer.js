import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="footer container">
            <div className="footer__wrapper">
                <Link className="footer__link" to="/adds">+ Add City</Link>
                <label className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-switch" data-label-on="&deg;C" data-label-off="&deg;F"></span>
                </label>
                {/* <div className="footer__temp">
                    <p className="footer__temp-change">&deg;C</p>
                    <p className="footer__temp-change footer__temp-change--active">&deg;F</p>
                </div> */}
                <p className="footer__time">11:03 am</p>
            </div>
            <p className="footer__copyright">Powered by The Weather Channel</p>
        </footer>
    );
}

export default Footer;