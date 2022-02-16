
import './Carts.css';


function Carts() {
    return (
        <section className="carts container">
            <ul className="carts__wrapper">
                <li className="cart">
                    <a href="#">
                        <div className="cart__container">
                            <div className="cart__wrapper">
                                <p className="cart__weather">Showers</p>
                                <p className="cart__time">10:03 am</p>
                            </div>
                            <div className="cart__temp">
                                <p className="cart__num">34&deg;</p>

                            </div>
                            <p className="cart__location">Columbia Falls, MT</p>
                        </div>
                    </a>
                </li>

                <li className="cart">
                    <a href="#">
                        <div className="cart__container">
                            <div className="cart__wrapper">
                                <p className="cart__weather">Showers</p>
                                <p className="cart__time">10:03 am</p>
                            </div>
                            <div className="cart__temp">
                                <p className="cart__num">34&deg;</p>

                            </div>
                            <p className="cart__location">Columbia Falls, MT</p>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Carts;