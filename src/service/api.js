import axios from 'axios';

export const url = 'https://dummyjson.com/products'

export default axios.create({
  baseURL: url,
});
