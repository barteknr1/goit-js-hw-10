import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector("#search-box");

// const fetchCountries()
// https://restcountries.com/#api-endpoints-v3-name

Notiflix.Notify.success("Hi");

fetch("https://restcountries.com/#api-endpoints-v3-name")
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        document.body.innerHTML = `${data.id}`
    })
    .catch(error => console.log(error))