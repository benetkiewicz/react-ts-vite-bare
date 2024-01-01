import { useEffect, useState } from "react";

function Weather() {
    const [temperature, setTemperature] = useState('');

    useEffect(() => {
        (async function () {
            const { temperatura } = await(await fetch('https://danepubliczne.imgw.pl/api/data/synop/id/12250')).json();
            setTemperature(temperatura);
        })();
    });

    return <div>Temperatura w Toruniu to {temperature}°C</div>;
}

export default Weather;