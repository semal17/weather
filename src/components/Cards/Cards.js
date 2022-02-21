import './Cards.css';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';


function Cards() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [arr, setArr] = useState([]);
    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=f6c26928d4edcccd56bcd02855ffd025")
            .then((res) => res.json())
            .then(
                (result) => {
                    setItems(result);
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                    setIsLoaded(true);

                }
            )
    }, [])
    if (error) {
        return <section className="cards container">
            <p>Ошибка.</p>
        </section>;
    } else if (!isLoaded) {
        return <section className="cards container">
            <p>Загрузка...</p>
        </section>;
    } else {
        console.log(items);
        return (
            <section className="cards container">
                <ul className="cards__wrapper">
                    <Card weather={items} />
                </ul>
            </section>
        );
    }
}


export default Cards;