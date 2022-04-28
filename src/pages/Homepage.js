import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const auth = "563492ad6f9170000100000132e9a03b97264e19b38ff3e57245c6c5";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=20";

  const searchURL = `https://api.pexels.com/v1/search?query=${input}&page=${page}&per_page=4`;

  //fetch data from pexel
  const Find = async (url) => {
    setPage(2)
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
    // console.log("data :>> ", data);
  };

  // loadMore
  const loadMore = async () => {
    setPage(page + 1);
    const dataFetch2 = await fetch(searchURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch2.json();
    parseData.photos.map((d) => setData((data) => [...data, d]));
    // setData(data.concat(parseData.photos))
    // console.log("data :>> ", data);
  };
  console.log("data :>> ", data);

  // show pic when first load
  useEffect(() => {
    Find(initialURL);
    // setPage(2);
  }, []);
  return (
    // <div>123</div>
    <div style={{ minHeight: "90vh" }}>
      <Search
        Find={() => {
          Find(searchURL);
        }}
        setInput={setInput}
      />

      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="addmore">
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
};
export default Homepage;
