import axios from 'axios';

const URL = 'https://blog-app-maca.herokuapp.com';

export const fetchPost = () => axios.get(`${URL}/post`);
export const createPost = (payload) => axios.post(`${URL}/post`, payload);
