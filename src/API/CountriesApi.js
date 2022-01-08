import { instance } from "./instance";

export class CountriesApi {
   static getAll = async () => {
      const res = await instance.get('/all?fields=name,population,region,flag,capital');

      return res.data
   }

   static getByName = async (name) => {
      const res = await instance.get(`/name/${name}`);

      return res.data[0]
   }

   static getByCodes = async (codes) => {
      const res = await instance.get(`/alpha?codes=${codes.join(',')}`);

      return res.data
   }
}