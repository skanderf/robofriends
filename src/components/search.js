import React from 'react';

const Search = ({searchfield, OnSeachChange}) => {
    return (
    
    <div className="pa2">
        <input 
        type='search' 
        placeholder='search robots'
        className="pa3 ba b--green bg-lightest-blue"
        onChange={OnSeachChange}
        />
    </div>
        
    )
    
}
export default Search;