
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

import Search from '../Search/Search';

function Header(props) {
    return (
        <header className="header container">
            <div className="header__wrapper">
                <div className="header-logo__wrapper">
                {props.arrow}
                    <img className="header-logo__img" src={logo} alt="" />
                    <p className={props.style}>{props.text}</p>
                </div>
                <Search />
            </div>
            <div className={props.isHiddenDay}>
                <div className="header-day__text-wrapper">
                    {props.arrow}
                    <p className="header-day__text">Today</p>
                </div>
                <p className="header-day__week">Wednesday</p>
                <Link to="/adds" className="header-day__link">
                    <svg className="header-day__link-img" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13.365" cy="13.365" r="11.865" stroke="#0076FF" strokeWidth="3" />
                        <path d="M12.945 6V19.89" stroke="#0076FF" strokeWidth="3" />
                        <path d="M19.89 12.945L6 12.945" stroke="#0076FF" strokeWidth="3" />
                    </svg>
                </Link>
            </div>
        </header>
    );
}

export default Header;

