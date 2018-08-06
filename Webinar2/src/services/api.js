import axios from 'axios';

export const fetchImage = (query, count) => {
    const url = `https://pixabay.com/api/?key=9464143-b7cbb21d169259e439c99d06c&q=${query}&image_type=photo&per_page=${count}`

    return fetch(url).then(respone => {
            if (respone.ok) return respone.json()
            throw new Error('Error' + respone.statusText)
        })
        .catch(err => console.log(err))
}