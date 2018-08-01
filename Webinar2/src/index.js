import './style.css';
import {fetchImage} from './services/api';
import './test.scss';

import articleTlp from './templates/article.hbs';


const form = document.querySelector('.form')
const input = document.querySelector('.input')
const grid = document.querySelector('.grid')
const spinner = document.querySelector('.spinner-overlay')

const createImg = photos => {

    grid.innerHTML = '';
    photos.hits.forEach(cont => {
        let content = articleTlp(cont);
        return grid.innerHTML += content;
    })
}

const submitForm = event => {
    event.preventDefault()
    spinnerToggle()
    fetchImage(input.value, 18).then(photos => {
        createImg(photos);
        spinnerToggle();
    })
    event.target.reset();

}

form.addEventListener('submit', submitForm)


const spinnerToggle = () => {
    spinner.classList.toggle('visible')
}