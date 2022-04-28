import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const auth = "563492ad6f9170000100000132e9a03b97264e19b38ff3e57245c6c5";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=20";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;
  
  //fetch data from pexel
  const Find = async () => {
    const dataFetch = await fetch(initialURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
    console.log("data :>> ", data);
  };

    //fetch data from pexel
    const searchData = async () => {
      const dataFetch = await fetch(searchURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: auth,
        },
      });
      let parseData = await dataFetch.json();
      setData(parseData.photos);
      console.log("data :>> ", data);
    };

  // show pic when first load
  useEffect(()=>{Find();},[])
  return (
    // <div>123</div>
    <div style={{ minHeight: "90vh" }}>
      <Search Find={searchData} setInput={setInput} />

      <div className="pictures">
        {data && data.map(d=>{
          return <Picture data={d} />
        })}
      </div>
    </div>
  );
};
export default Homepage;
