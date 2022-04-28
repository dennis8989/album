import React, { useState } from 'react'



const Search = ({Find, setInput}) => {
  const inputHandler = (e)=>{
    console.log('e.get.value :>> ', e.target.value);
    setInput(e.target.value)
  }

  return (
    <div className='search' >
        <input onChange={inputHandler} type="text" />
        <button onClick={Find}>Search</button>      
    </div>
  )
}

export default Search