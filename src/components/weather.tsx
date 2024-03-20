import { useWeather } from "../weatherService";

function Weather({cityId}) {
    const { data } = useWeather(cityId);

    return data ? <div>Temperatura w wybranym mieście to {data['temperatura']}°C</div> : <div>Ładowanie...</div>;
}

export default Weather;