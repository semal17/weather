import './Card.css';
import Time from '../Time/Time';
import { Link } from 'react-router-dom';


function Card(props) {
    
    return (                      
                <li key={props.key} className="card">
                    <Link to="/city">
                        <div className="card__container">
                            <div className="card__wrapper">
                                <p className="card__weather">{props.weather}</p>
                                <Time />
                            </div>
                            <div className="card__temp">
                                <p className="card__num">34&deg;</p>

                            </div>
                            <p className="card__location">Columbia Falls, MT</p>
                        </div>
                    </Link>
                </li>               
    );
}

export default Card;