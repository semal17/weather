import './Card.css';
import Time from '../Time/Time';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Card(props) {
    const [color, setColor] = useState("card__container");
    let onCardClick = (event) => {
        if (color == "card__container card__container--red") {
            setColor("card__container");
        } else {
            setColor("card__container card__container--red");
        }
        
    }
    return (                      
                <li className="card" onClick={onCardClick}>
                    <Link to="/city">
                        <div className={color}>
                            <div className="card__wrapper">
                                <p className="card__weather">{props.weather.list[0].weather[0].main}</p>
                                <Time time={props.weather.list[0]}/>
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