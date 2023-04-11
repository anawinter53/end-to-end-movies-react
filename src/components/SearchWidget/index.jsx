import React, { useEffect, useState } from 'react'
import { ShowCard } from '../'

export default function SearchWidget() {
    const [inputValue, setInputValue] = useState('');
    const [searchString, setSearchString] = useState('Married at first sight')
    const [shows, setShows] = useState([])

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSearchString(inputValue)
        setInputValue('')
    }

    async function searchAPI() {
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
        const json = await res.json()
        const data = json.map(s => s.show)
        setShows(data)
    }

    useEffect(() => {
        searchAPI()
    }, [searchString])

    return (
    <>
        <form onSubmit={handleSubmit}>
            <input value={inputValue} type='text' required onChange={handleInput}/>
            <input type='submit' value='Search' />
        </form>
        {shows.map(s => s.image? <ShowCard show={s} key={s.id}/> : '')}
    </>
    )
}
