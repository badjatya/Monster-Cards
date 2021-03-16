import React from 'react'

function CardList(props) {
    return (
        <div>
            {props
                .monsters
                .map(monster => (
                    <p>{monster.name}</p>
                ))
            }
        </div>
    )
}

export default CardList;
