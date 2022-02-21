import './Cards.css';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';
import Time from '../Time/Time';
import { Link } from 'react-router-dom';

function Cards() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});
    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=f6c26928d4edcccd56bcd02855ffd025")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);                    
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return  <section className="cards container">
        <p>Ошибка: {error.message}</p>
    </section> ;
    } else if (!isLoaded) {
        return  <section className="cards container">
        <p>Загрузка...</p>
    </section> ;
    } else {
        console.log(items);
        return (
            <section className="cards container">
                <ul className="cards__wrapper">

                    {/* {items.map(item => (
                        <li key={item.cnt}>
                            {item.cnt} 
                        </li>
                    ))} */}
                    <li>{items.cod}</li>
                </ul>
            </section>
        );
    }
}


export default Cards;