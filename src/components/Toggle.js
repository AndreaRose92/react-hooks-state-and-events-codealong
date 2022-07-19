import { useState } from "react";
import React from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false)
  function handleClick() {
    setIsOn((isOn) = !isOn)
  }

  return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
