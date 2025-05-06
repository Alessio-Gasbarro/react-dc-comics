import React from 'react'

const ComicCard = ({ comic }) => {
    return (
        <div className='comic-card'>
            <img src={comic.thumb} alt={comic.title} className='card-img' />
            <h3 className='card-txt'>{comic.series}</h3>
        </div>
    )
}

export default ComicCard;
