import React  from 'react';
import "./display";
import { Card } from '..';
import { Monster } from '../../App';

type CardsProp = {
  monsters : Monster[]
}

const Display = ( {monsters} : CardsProp) => {
 
  
  // useEffect( () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((users) => setMonsters(users));

  //   console.log(monsters)
  // }, [])

  return (
    <div className='display'>
      {monsters.map((monster) => {
          return  <Card monster = {monster}></Card>
        })}

    </div>
  )
}

export default Display