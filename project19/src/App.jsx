import { useRef, useState } from "react";
import useOnClickOutside from ".";

export default function App() {
  const [open, setOpen] = useState(false);
  const boxref = useRef();

  useOnClickOutside(boxref, () => {
    setOpen(false);
  });

  return (
    <div>
      <button onClick={() => setOpen(true)}>open</button>
      {open && (
        <div
          ref={boxref}
          style={{ border: "1px solid black", padding: "20px", width: "200px" }}
        >
          drop down
        </div>
      )}
    </div>
  );
}
