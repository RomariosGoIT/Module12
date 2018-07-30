import shortId from 'shortid';

import axios from 'axios';

import './style.css'

import * as logger from './loader'

console.log(logger)

logger.logToLowerCase('TO LOWER CASE!');
logger.logToUpperCase('log to upper case!')



axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response.data));

console.log('Mi new id: ' + shortId())



// const a = [1, 2, 3, 5];
// const b = [...a, 6, 7];

// console.log(b)
