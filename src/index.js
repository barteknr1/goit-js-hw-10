import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

searchBox.addEventListener("input", debounce(e => {
    fetchCountries(searchBox.value.trim())
        .then(data => {
            console.log(data.length);
            if (data.length > 10) {
                countryInfo.innerHTML = '';
                countryList.innerHTML = '';
                Notiflix.Notify.info(`Too many matches found. Please enter a more specific name.`);
            }
            if (data.length >= 2 && data.length <= 10) {
                countryInfo.innerHTML = '';
                countryList.innerHTML = '';
                console.log(`2 to 10`)
                console.log(data);
                data.forEach(item =>
                    `<p>${item.name.official}</p>
                    <p>${item.capital}</p>
                    <p>${item.population}</p>
                    <p>${Object.values(item.languages)}</p>`
                )
            }
            if (data.length === 1) {
                countryInfo.innerHTML = '';
                countryList.innerHTML = '';
                console.log(data);
                countryInfo.innerHTML =
                    `<img src="${data[0].flags.svg}" width=50></img>
                    <h2>${data[0].name.official}</h2>
                    <p>Capital: ${data[0].capital}</p>
                    <p>Population: ${data[0].population}</p>
                    <p>Languages: ${Object.values(data[0].languages)}</p>`
            }
        })
        .catch(err => {
            console.log(err);
                Notiflix.Notify.failure(`Oops, there is no data with that name`)
        });
}, DEBOUNCE_DELAY));

