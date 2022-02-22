import './Card.css';
import Time from '../Time/Time';
import { Link } from 'react-router-dom';


function Card(props) {
    
    return (                      
                <li className="card">
                    <Link to="/city">
                        <div className="card__container">
                            <div className="card__wrapper">
                                <p className="card__weather">{props.weather.list[0].weather[0].main}</p>
                                <Time />
                            </div>
                            <div className="card__temp">
                                <p className="card__num">{Math.round(props.weather.list[0].main.temp)}&deg;</p>
                            </div>
                            <p className="card__location">{props.weather.city.name}</p>
                        </div>
                    </Link>
                </li>                              
    );
}

export default Card;