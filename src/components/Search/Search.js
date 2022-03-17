import './Search.css';


function Search(props) {
    return (
        <input className={props.classSearch} type="search" placeholder="Search City"></input>
    );
}

export default Search;

