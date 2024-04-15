import React from 'react';
import "./card.css";
import { Monster } from '../../App';

type MonsProp = {
  monster : Monster
}

const Card = ( {monster} : MonsProp ) => {
  const { id, name } = monster

  return (
    <div className='cardlist' key = {id}>
      <img src= {`https://robohash.org/${id}/set=set2`} alt="monster" />
      <h1>
        {name}
      </h1>
    </div>
  )
}

export default Card