import React, { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errmsg, seterrmsg] = useState("");
  const [scrollpercentage, setscrollpercentage] = useState(0);

  async function fecthData(geturl) {
    try {
      setLoading(true);
      const res = await fetch(geturl);
      const data = await res.json();
      setData(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      seterrmsg(error.message);
      setLoading(false);
    }
  }
  function handleScrollpercentage() {
    const scrolltop = window.scrollY;
    const heightdoc =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrolltop / heightdoc) * 100;
    if (heightdoc === 0) return;
    setscrollpercentage(scrolled);
  }
  useEffect(() => {
    fecthData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollpercentage);

    return () => window.removeEventListener("scroll", handleScrollpercentage);
  }, []);
  if (loading) return <h2>loading</h2>;
  if (errmsg) return <h2>error..</h2>;
  return (
    <div>
      <div className="top-container ">
        {" "}
        <div className="scroll-progress-tracker">
          {" "}
          <div
            style={{
              width: `${scrollpercentage}%`,
              backgroundColor: `rgb(${255 - scrollpercentage * 2.55}, ${
                scrollpercentage * 2.55
              }, 0)`,
              transition: "width 0.2s ease, background-color 0.2s ease",
              height: "10px",
            }}
          ></div>{" "}
        </div>{" "}
        <h1 className="heading">
          {" "}
          Custom ScrollIndicator {Math.round(scrollpercentage)}%{" "}
        </h1>{" "}
        <div className="product-container">
          {data && data.length
            ? data.map((item) => {
                return <p key={item.id}>{item.title}</p>;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
