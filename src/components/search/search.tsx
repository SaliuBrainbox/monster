import React , {ChangeEvent} from 'react';
import "./search.css";

type SearchType = {
  placeholder : string;
  changehandler : (event : ChangeEvent<HTMLInputElement>) => void;
}

const Search = ( { placeholder, changehandler } : SearchType) => {
  
  return (
    <div className='search'>
        <input type="search" 
        placeholder= {placeholder}
        onChange={changehandler}
         /> 
    </div>
  )
}

export default Search