import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const development = process.env.NODE_ENV !== 'production'

export default axios.create({
    baseURL: 'http://localhost:8888/'
});
