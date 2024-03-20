import ky from "ky";

export const httpClient = ky.create({
    prefixUrl: 'https://danepubliczne.imgw.pl/api/data/synop/',
});
  