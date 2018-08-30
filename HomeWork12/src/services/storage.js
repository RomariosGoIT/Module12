let keyValue = '';

export const set = (key, value) => {
    keyValue = key;
    localStorage.setItem(key, JSON.stringify(value));
};

export const get = (keys) => {
    // keys.forEach(value => {localStorage.getItem(value)})
    // const data =  localStorage.getItem(keys);
    // return data ? JSON.parse(data) : null
   
}

export const remove = () => {
    localStorage.removeItem('image-finder-app');
}