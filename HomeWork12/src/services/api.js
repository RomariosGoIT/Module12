import axios from 'axios';

// const exp = axios.get('http://api.linkpreview.net/?key=123456&q=https://www.google.com')
// .then(res => console.log(res))

export const fetchImage = (query) => {
    const url = `http://api.linkpreview.net/?key=5b7329e7931e20fe313d546811bb81f26d7fb26e98c56&q=https://${query}`

    return  axios
    .get(url)
    .then(res => res.data)
    .catch(err => console.log('axios err:', err))
    
}
