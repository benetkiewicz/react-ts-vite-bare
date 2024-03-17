import { useEffect, useState } from "react";
import useCallbackState from "../hooks/useCallbackState";

function Weather() {
  const [test, setTest] = useCallbackState<boolean>(true);
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("12500");

  useEffect(() => {
    console.log("Effect!");
    (async function () {
      const { temperatura } = await (
        await fetch(`https://danepubliczne.imgw.pl/api/data/synop/id/${city}`)
      ).json();
      setTemperature(temperatura);
    })();
  });

  return (
    <>
      <div>
        Temperatura {test ? "true" : "false"} w {city == "12500" ? "Jeleniej" : "Toruniu"} to {temperature}°C 
      </div>
      <button
        onClick={() => {
          setTest(
            (prev) => !prev,
            (newVal) => {
              console.log("The value changed", newVal);
            }
          );
        }}
      >
        Change
      </button>
      <button
        onClick={() => {
          setTest((prev) => !prev);
        }}
      >
        Change noCallback
      </button>
    </>
  );
}

export default Weather;
