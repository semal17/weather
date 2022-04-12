import './TimeNow.css';

import { useState, useEffect } from 'react';

function TimeNow(props) {

    const [date, setDate] = useState(new Date());    
    const time = date.toLocaleString("ru-ru", { hour: '2-digit', minute: '2-digit'});
    useEffect(() => {
      const updateTime = setInterval(() => {
        setDate(new Date());
      }, 1000);
      return () => clearInterval(updateTime);
    }, []); 

    return (
        <p className={props.displayNone}>{time}</p>
    );
}

export default TimeNow;