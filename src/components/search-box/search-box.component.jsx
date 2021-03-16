import React from 'react'

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
