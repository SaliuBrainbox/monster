import './App.css';
import { Search, Display } from './components';
import { useState, useEffect, ChangeEvent } from 'react';
import { getData } from './utils/getDataUtilis';

export type Monster = {
  name: string;
  id: string;
}

function App() {

  const [monsters, setMonsters ] = useState<Monster[]>([])
  const [ filtered, setFiltered ] = useState(monsters)
  const [ searchFilter, setSearchFilter ] = useState('')

  useEffect( () => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => response.json())
    // .then((users) => setMonsters(users));

    const fetchUser = async () => {
      const user = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(user)
    }

    fetchUser()
    
  }, [])

 useEffect(() => {
   const newFiltered = monsters.filter((monster) => {
     return monster.name.toLocaleLowerCase().includes(searchFilter)
   })
 
   setFiltered(newFiltered)
 },[monsters, searchFilter])
   

  const filt = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.value.toLocaleLowerCase()
    setSearchFilter(field)
  }  

   
   console.log('rendering')

  // console.log(filtered)

 


  return (
    <div className="App">
      <h1>My Monster </h1>
      <Search placeholder = 'search'  
      changehandler = {filt}/>       
      <Display monsters={filtered}></Display>
    </div>
  )
}

export default App;
