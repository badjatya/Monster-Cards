import React from 'react'

import "./search-box.style.css"

function SearchBox(props) {
    return (
        <input
            type="search"
            className="search"
            placeholder={props.placeholder}
            onChange={props.handleChange}
        />
    )
}

export default SearchBox
