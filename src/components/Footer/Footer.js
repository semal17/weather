import './Footer.css';
import { Link } from 'react-router-dom';




function Footer(props) { 

    return (
        <footer className={props.isHiddenOnMobile}>
            <div className="footer__line"></div>
            <div className="footer__wrapper">
                <Link className="footer__link" to="/adds">+ Add City</Link>
                <label className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-switch" data-label-on="&deg;C" data-label-off="&deg;F"></span>
                </label>  
                {props.city}
                {props.time}                          
                {/* <p className="footer__time">{props.our}:{props.minute}</p> */}
            </div>
            <p className="footer__copyright">Powered by The Weather Channel</p>
        </footer>
    );
}

export default Footer;