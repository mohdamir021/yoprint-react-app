import { AnimeIndexParams, PaginationType } from "../interfaces";
import { AnimeSearchData } from "../interfaces/search";
import jikanAPI from "../libs/axios";

export const animeService = {

  async index (params: AnimeIndexParams) {
    try {
      const {data} = await jikanAPI.get("/anime", {params});
      return data as AnimeSearchData;
    } catch (error) {
      console.log(error)
    }
  },

  async show (id: string, isShowFull?: boolean) {
    try {
      const {data} = await jikanAPI.get(`/anime/${id}${isShowFull ? "/full" : ""}`);
      return data;
    } catch (error) {
      console.log(error)
    }
  },

  async characters (id: string) {
    try {
      const {data} = await jikanAPI.get(`/anime/${id}/characters`);
      return data;
    } catch (error) {
      console.log(error)
    }
  },

  async pictures (id: string) {
    try {
      const {data} = await jikanAPI.get(`/anime/${id}/pictures`);
      return data;
    } catch (error) {
      console.log(error)
    }
  },

  async moreInfo (id: string) {
    try {
      const {data} = await jikanAPI.get(`/anime/${id}/moreinfo`)
    } catch (error) {
      console.log(error)
    }
  }
}