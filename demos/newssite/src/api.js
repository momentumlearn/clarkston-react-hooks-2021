import axios from 'axios'

const baseURL = axios.create({
    baseURL: 'http://newsapi.org/v2/'
})