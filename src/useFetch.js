import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [ images, setImages] = useState([]);

    const buildUrl = () => {
        let url = new URL('https://api.pexels.com/v1/search');

        url.search = new URLSearchParams({
        query: '', //TODO change to a variable name
        orientation: 'square',
        size: 'medium',
        per_page: 6, //TODO change to a variable name

        });
        return url;
    }

    const fetchPics = () => {
        fetch(buildUrl(), {
            headers: {
                Authorization: process.env.REACT_APP_AUTH_KEY,
            }
        })
        .then(data => data.json())
        .then(data => setImages(data.photos))
    }

    useEffect(() => {
        fetchPics();
    }, [])

    return images;
    
}
export default useFetch;