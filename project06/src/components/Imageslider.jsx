import { useEffect, useState } from "react";

const Imageslider = ({ url }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);
  const [ispused, setispaused] = useState(false);

  useEffect(() => {
    async function fecthImages() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        seterrorMsg(error.message);
        setLoading(false);
      }
    }
    fecthImages();
  }, [url]);

  useEffect(() => {
    if (images.length === 0 || ispused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, ispused]);
  const handleprev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNxt = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (loading) return <h1 style={{ height: "100px" }}> Loading.....</h1>;
  if (errorMsg) return <h1 style={{ height: "100px" }}> Error</h1>;
  if (images.length === 0) return null;
  return (
    <div
      className="container"
      onMouseEnter={() => setispaused(true)}
      onMouseLeave={() => setispaused(false)}
    >
      {" "}
      <p>Imageslider</p>
      <div className="inner-container">
        {" "}
        <button onClick={handleprev}>⬅️</button>
        <img
          src={images[currentSlide].download_url}
          alt={images[currentSlide].author}
        />{" "}
        <button onClick={handleNxt}>➡️</button>{" "}
      </div>{" "}
      <div>
        {images.map((_, index) => (
          <span
            className="slides-dot"
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              cursor: "pointer",
              fontSize: "22px",
              color: index == currentSlide ? "black" : "gray",
            }}
          >
            {" "}
            ●
          </span>
        ))}
      </div>{" "}
    </div>
  );
};

export default Imageslider;
