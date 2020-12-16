import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Flashcard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
    <ReactCardFlip isFlipped={isFlipped}>
        <div onClick={handleClick} style={props.styles.card}>
            <h3 className='subtitle'>{props.question}</h3>
        </div>
        <div onClick={handleClick} style={props.styles.card}>
            <h3 className='subtitle'>{props.answer}</h3>
        </div>
    </ReactCardFlip>
)
}

export default Flashcard;