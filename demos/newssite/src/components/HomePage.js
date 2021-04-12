import React, {useEffect, useState} from 'react'
import {fetchHeadlines} from '../api'

export default function HomePage({apiKey}) {
    const [stories, setStories] = useState([])

    console.log('apiKey from props', apiKey)

    useEffect(() => {
        fetchHeadlines(apiKey).then(results => setStories(results.articles))
    }, [])

    console.log('fetched stories', stories)

    return null
} 
