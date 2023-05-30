import React from 'react';
import './Card.css';


const Card = ({ title, img1, date }) => {
    return (
        <div className='card'>
            <img src={img1}></img>
            <h3>{title}</h3>
            <p>{date}</p>
        </div>
    )
}

export default Card;