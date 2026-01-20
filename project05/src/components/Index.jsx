import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Index = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, sethover] = useState(0);
  function handleClick(getindex) {
    setRating(getindex);
  }
  function handleMouseMove(getindex) {
    sethover(getindex);
  }
  function handleMouseLeave() {
    sethover(rating);
  }

  return (
    <div className="star-Rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Index;
