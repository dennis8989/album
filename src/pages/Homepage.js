import React, { useState } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [data, setData] = useState("");
  const auth = "563492ad6f9170000100000132e9a03b97264e19b38ff3e57245c6c5";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${data}&page=1&per_page=15`;
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
  return (
    // <div>123</div>
    <div style={{ minHeight: "90vh" }}>
      <Search Find={Find} />

      <div className="pictures">
        {data && data.map(d=>{
          return <Picture data={d} />
        })}
      </div>
    </div>
  );
};
export default Homepage;
