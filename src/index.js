import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

Notiflix.Notify.success("Hi");

searchBox.addEventListener("input", debounce(e => {
    fetchCountries(searchBox.value.trim())
        .then(data => console.log(data))
        
        .catch(err => Notiflix.Notify.error(err));
}, DEBOUNCE_DELAY));

