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
            <p>{props.question}</p>
        </div>
        <div onClick={handleClick} style={props.styles.card}>
            <p>{props.answer}</p>
        </div>
    </ReactCardFlip>
    )
}

export default Flashcard;