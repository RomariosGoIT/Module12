import axios from 'axios';

export const fetchImage = (query, count) => {
    const url = `https://pixabay.com/api/?key=9464143-b7cbb21d169259e439c99d06c&q=${query}&image_type=photo&per_page=${count}`

    return  axios
    .get(url)
    .then(res => res.data.hits)
    .catch(err => console.log('axios err:', url))
    
}
