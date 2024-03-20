import { useState } from "react";
import Weather from "./weather";

function Forecast() {
    const [city, setCity] = useState(12500);
    return <>
        <button onClick={() => setCity(12250)}>Toruń</button>
        <button onClick={() => setCity(12500)}>Jelenia</button>
        <Weather cityId={city} />
        </>;
}

export default Forecast;