import React, { useState } from 'react'
import './SearchBar.css'
function SearchBar(props) {
    const [search, setSearch] = useState("")
    const handleChange=(e)=>{
        e.preventDefault();
        setSearch(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.callback(search)
        setSearch("")
    }
    return (
        <div className="search-container">
            <form className="search-food-form" onSubmit={handleSubmit} type="submit">
                <input value={search} className="search-food-input" onChange={handleChange} type="text" placeholder="Search Food" />
                <button onClick={handleSubmit} className="search-button">Search</button>
            </form>
        </div>
    )
}

export default SearchBar
