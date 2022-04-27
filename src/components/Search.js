import React, { useState } from 'react'



const Search = ({Find}) => {
  // const auth = "563492ad6f9170000100000132e9a03b97264e19b38ff3e57245c6c5";
  // const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  // const [data, setData] = useState(null);
  // const Find = async() =>{

  //   const dataFetch = await fetch(initialURL, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: auth,
  //     }
  //   });
  //   let parseData = await dataFetch.json();
  //   setData(parseData.photos)
  //   console.log('data :>> ', data);
      // }
  return (
    <div className='search' >
        <input type="text" />
        <button onClick={Find}>Search</button>      
    </div>
  )
}

export default Search