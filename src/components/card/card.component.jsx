import React from 'react'



function Card(props) {
    return (
        <div className="card-container">
            <h3>{props.monster.name}</h3>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card
