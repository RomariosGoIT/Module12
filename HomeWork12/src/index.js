import './style.css';
import {
    fetchImage
} from './services/api';
import './test.scss';
import * as storage from './services/storage'
import articleTlp from './templates/article.hbs';



const form = document.querySelector('.form')
const input = document.querySelector('.input')
const grid = document.querySelector('.grid')
const spinner = document.querySelector('.spinner-overlay');

const keyValue = [];

const persistedPhotos = storage.get()

const fetchedPhotos = persistedPhotos ? persistedPhotos : [];

const murkup = fetchPhotos(fetchedPhotos);

updateGrid(murkup);

// function test (val) {

//     val.forEach(value => {
//         let item = localStorage.getItem(value);
//         console.log(item)
//         let murkup = fetchPhotos(item);
//         return updateGrid(murkup);   
//     })


// }

// test(keyValue);


function createImg(photos) {
    let content = articleTlp(photos);
    return grid.insertAdjacentHTML('afterbegin', content);

}

const submitForm = event => {
    event.preventDefault()
    spinnerToggle()
    fetchImage(input.value).then(photos => {
        fetchedPhotos.unshift(photos);        
        storage.set(photos.url, fetchedPhotos);
        createImg(photos);
        hendleButton();
        spinnerToggle();
    })
    event.target.reset();

}

form.addEventListener('submit', submitForm)


//================  helpers


function fetchPhotos(data) {
    return data.reduce((markup, photos) => markup + articleTlp(photos), '')
}

function updateGrid(markup) {
    grid.insertAdjacentHTML('afterbegin', markup);
}

function spinnerToggle() {
    spinner.classList.toggle('visible')
}



function hendleButton() {
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', handleDeteleBtn);
    })
}

function handleDeteleBtn(evt) {
    evt.target.parentNode.remove();
    console.log('its work')
}