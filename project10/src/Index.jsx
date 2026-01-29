import { useEffect } from "react";
import { useState } from "react";

const UseLocalstorage = (key, defaultvalue) => {
  const [value, setvalue] = useState(() => {
    let currentvalue;
    try {
      currentvalue = JSON.parse(
        localStorage.getItem(key) || String(defaultvalue)
      );
    } catch (error) {
      console.log(error);
      currentvalue = defaultvalue;
    }
    return currentvalue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setvalue];
};

export default UseLocalstorage;
