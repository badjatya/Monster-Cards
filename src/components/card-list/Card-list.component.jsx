import React from 'react'

import Card from '../card/card.component'

import "./card-list.style.css"

function CardList(props) {
    return (
        <div className="card-list">
            {
                props.monsters.map(monster => (
                    <Card monster={monster} />
                ))
            }
        </div>
    )
}

export default CardList;
