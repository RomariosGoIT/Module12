import axios from 'axios';

export const fetchImage = (query, count) => {
    const url = `https://pixabay.com/api/?key=9464143-b7cbb21d169259e439c99d06c&q=${query}&image_type=photo&per_page=${count}`

    axios.get(url).then(response => console.log(response))


    return fetch(url).then(respone => {
            console.log('fetch response:', respone)
            if (respone.ok) return respone.json()
            throw new Error('Error' + respone.statusText)
        })
        .catch(err => console.log(err))
}