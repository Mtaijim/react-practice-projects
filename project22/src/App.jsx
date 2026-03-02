import { useRef } from "react";

export default function ScrollToParticularSection() {
  const ref = useRef();
  const data = [
    {
      label: "this is first card ",
      style: {
        width: "100%",
        height: "500px",
        background: "red",
      },
    },
    {
      label: "this is second card ",
      style: {
        width: "100%",
        height: "500px",
        background: "blue",
      },
    },
    {
      label: "this is third card ",
      style: {
        width: "100%",
        height: "500px",
        background: "grey",
      },
    },
    {
      label: "this is fourth card ",
      style: {
        width: "100%",
        height: "500px",
        background: "green",
      },
    },
  ];
  function handleScroll() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <h1> Scroll to particular section </h1>
      <button onClick={handleScroll}> scroll </button>
      <div>
        {data.map((dataItem, index) => (
          <div ref={index === 2 ? ref : null} style={dataItem.style}>
            <h3>{dataItem.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
