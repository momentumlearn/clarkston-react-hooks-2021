import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'http://newsapi.org/v2/'
})

export const fetchHeadlines = (apiKey) => {
    return newsApi.get('top-headlines?country=us', {
        headers: {'X-Api-Key': apiKey}
    }).then((response) => response.data)
}