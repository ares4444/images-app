import axios from 'axios';

export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: '563492ad6f91700001000001abdc5d7783dd46c08353dff6aca404b0'
    }
}):