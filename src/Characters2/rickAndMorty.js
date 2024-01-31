import React from 'react';

const RickAndMorty = (props) => {
    return (
        <>
          <h1>{props.id}</h1>
          <h1>{props.name}</h1>
          <p>{props.status}</p>
          <p>{props.species}</p>
            <img src={props.img} alt={props.name}/>


        </>
    );
};

export default RickAndMorty;



// "id": 1,
//     "name": "Rick Sanchez",
//     "status": "Alive",
//     "species": "Human",
//     "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",