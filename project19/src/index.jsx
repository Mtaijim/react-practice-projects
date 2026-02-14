import { useEffect } from "react";

export default function useOnClickOutside(ref, callback) {
  useEffect(() => {
    function handleclick(event) {
      if (!ref.current || ref.current.contains(event.target)) return;
      callback(event);
    }
    document.addEventListener("mousedown", handleclick);
    return () => {
      document.removeEventListener("mousedown", handleclick);
    };
  }, [ref, callback]);
}
