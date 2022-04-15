import './Footer.css';
import { Link } from 'react-router-dom';




function Footer(props) { 
    let checkboxClick = (e) => {
        if(e.target.checked === true) {
            localStorage.setItem('temp', 'C');
        }
        else {
            localStorage.setItem('temp', 'F');
        }
    }

    
    return (
        <footer className={props.isHiddenOnMobile}>
            <div className="footer__line"></div>
            <div className="footer__wrapper">
                <Link className="footer__link" to="/adds">+ Add City</Link>
                <label className="checkbox" onClick={checkboxClick}>
                    <input type="checkbox" defaultChecked />
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