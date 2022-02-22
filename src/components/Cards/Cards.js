import './Cards.css';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';


function Cards() {
    const [arr, setArr] = useState([]);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        Promise.all([fetch("http://api.openweathermap.org/data/2.5/forecast?q=Moscow&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025"),
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=Karabanovo&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025"),
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=Saint%20Petersburg&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025"),
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=Kazan&units=metric&appid=f6c26928d4edcccd56bcd02855ffd025")])
            .then(res => Promise.all(res.map(r => r.json())))
            .then( 
                (result) => {
                    setItems(result);
                    // setArr([...arr, result]);
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
                    {items.map(item => <Card key={item.city.id} weather={item} />)}
                    
                </ul>
            </section>
        );
    }
}


export default Cards;