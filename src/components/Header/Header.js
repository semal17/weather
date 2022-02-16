
import './Header.css';
import logo from '../../images/logo.png';

function Header() {
    return (
        <header className="header container">
            <div className="header__wrapper">
                <div className="header-logo__wrapper">
                    <img className="header-logo__img" src={logo} alt="" />
                    <p className="header-logo__text">Weather</p>
                </div>
                <input className="header__search" type="search" placeholder="Search City"></input>
            </div>
            <div className="header-day">
                <p className="header-day__text">Today</p>
                <p className="header-day__week">Wednesday</p>
                <a className="header-day__link">
                <svg className="header-day__link-img" width="27" height="27">
                    <use className="header-day__link-plus"  xlinkHref="../../images/sprites.svg#plus"></use>
                </svg>
                </a>
                
            </div>
        </header>
    );
}

export default Header;

