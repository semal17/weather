import { useRef } from 'react';

import './Search.css';



function Search(props) {

    let input = useRef();
    let changeSearch = () => {
        console.log(input.current.value);
    }   

    return (
        <input className={props.classSearch} onInput={changeSearch} ref={input} type="search" placeholder="Search City"></input>
    );
}

export default Search;

