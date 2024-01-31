import React from 'react';

const Simpsons = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt={props.name}/>
        </div>

    );
};

export default Simpsons;