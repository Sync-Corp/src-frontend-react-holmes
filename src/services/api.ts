import axios from 'axios';

const development = process.env.NODE_ENV !== 'production'

export default axios.create({
    baseURL: 'https://src-backend-spring-holmes.herokuapp.com/'
});
