import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://hamburger-4cc35.firebaseio.com/'
});

export default instance