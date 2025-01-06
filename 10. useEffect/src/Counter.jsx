import { useEffect, useState } from "react";

function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let clickx = () => {
    // console.log("hello");
    setCountx(countx + 1);
  };
  let clicky = () => {
    // console.log("hello");
    setCounty(county + 1);
  };

  useEffect(function print() {
    console.log("Hello World");
  }, []);  //Dependencies

  return (
    <>
      <button onClick={clickx}>Count {countx}</button>
      <br />
      <br />
      <button onClick={clicky}>Count {county}</button>
    </>
  );
}

export default Counter;
