import { useQuery } from "@tanstack/react-query";
import { httpClient } from "./httpClient";

export const getTemp = (cityId: number) => httpClient.get(`id/${cityId}`).json();

export const useWeather = (cityId?: number) => {
    return useQuery({
        queryKey: ['weather', cityId],
        queryFn: () => getTemp(cityId),
        staleTime: 5 * 1000,
    });
}