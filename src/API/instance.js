import axios from "axios";

const BASE_URL = 'https://restcountries.com/v2';

export const instance = axios.create({
   baseURL: BASE_URL
})