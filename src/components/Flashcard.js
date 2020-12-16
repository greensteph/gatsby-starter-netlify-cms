import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Flashcard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
    <ReactCardFlip isFlipped={isFlipped}>
        <div>
            <h3 className='subtitle'>This is the front of the card.</h3>
            <button onClick={handleClick}>Click to flip</button>
        </div>

        <div>
            This is the back of the card.
            <button onClick={handleClick}>Click to flip</button>
        </div>
    </ReactCardFlip>
)
}

export default Flashcard;