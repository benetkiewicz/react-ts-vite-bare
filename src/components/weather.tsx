import { useEffect, useState } from "react";
import { httpClient } from "../httpClient";

function Weather() {
    const [temperature, setTemperature] = useState('');

    useEffect(() => {
        (async function () {
            const { temperatura }: { temperatura: number } = await httpClient.get('id/12250').json();
            setTemperature(temperatura.toString());
        })();
    });

    return <div>Temperatura w Toruniu to {temperature}°C</div>;
}

export default Weather;