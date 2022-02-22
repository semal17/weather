
import './Time.css';

function Time(props) {
    return (
        <p className="time">{props.time.dt_txt.slice(11, 16)}</p>
    );
}

export default Time;
