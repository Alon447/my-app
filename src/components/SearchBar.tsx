import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { debounce } from 'lodash'

interface searchResults {
    id: number
    name: string
}
function SearchBar() {
    const [query, setQuery] = useState<string>('')
    const [results, setResults] = useState<searchResults[]>([])
    const clubs: searchResults[] = [
        { id: 1, name: 'ברצלונה' },
        { id: 2, name: 'ריאל מדריד' },
        { id: 3, name: 'מכבי תל אביב' },
        { id: 4, name: 'מכבי חיפה' },
        { id: 5, name: 'ליברפול' },
        { id: 6, name: 'אברטון' },
        { id: 7, name: 'מילאן' },
        { id: 8, name: 'אינטר' },
        { id: 9, name: 'יובנטוס' },
    ]
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        if (value === '') {
            setQuery('')
            debouncedSearch('')
        } else {
            setQuery(value)
            debouncedSearch(query)
        }
    }
    const debouncedSearch = debounce((value: string) => {
        search(value)
    }, 500)

    function search(value: string) {
        const filteredRes = clubs.filter((res) => res.name.includes(value))
        setResults(filteredRes)
        console.log(results)
    }
    return (
        <div className="relative">
            <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                מצא כרטיסים
            </button>
            <input
                value={query}
                onChange={handleInputChange}
                dir="rtl"
                type="text"
                placeholder="חפש כרטיסים"
                className="bg-white-200 rounded-md border  border-black  px-4 py-2 text-black"
            />
            <ul className="">
                {results.map((result) => (
                    <li key={result.id} className="">
                        {result.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SearchBar
