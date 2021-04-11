import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'http://newsapi.org/v2/'
})

