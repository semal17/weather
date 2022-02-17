
import './Carts.css';
import Time from '../Time/Time';
import {Link} from 'react-router-dom';


function Carts() {
    return (
        <section className="carts container">
            <ul className="carts__wrapper">
                <li className="cart">
                <Link to="/city">
                        <div className="cart__container">
                            <div className="cart__wrapper">
                                <p className="cart__weather">Showers</p>
                                <Time />
                            </div>
                            <div className="cart__temp">
                                <p className="cart__num">34&deg;</p>

                            </div>
                            <p className="cart__location">Columbia Falls, MT</p>
                        </div>
                    </Link>
                </li>

                <li className="cart">
                <Link to="/city">
                        <div className="cart__container">
                            <div className="cart__wrapper">
                                <p className="cart__weather">Showers</p>
                                <Time />
                            </div>
                            <div className="cart__temp">
                                <p className="cart__num">34&deg;</p>

                            </div>
                            <p className="cart__location">Columbia Falls, MT</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default Carts;