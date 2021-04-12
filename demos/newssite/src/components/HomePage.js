import React, {useEffect, useState} from 'react'
import {fetchHeadlines} from '../api'

export default function HomePage({apiKey}) {
    const [stories, setStories] = useState([])

    console.log(apiKey)
    useEffect(() => {
        fetchHeadlines(apiKey).then(results => setStories(results.articles))
    })

    console.log(stories)

    return null
} 