import axios from "axios";
import type { Tour } from "@/types/tour";

const instance = axios.create({
  baseURL: "https://api.bimtours.dev/v1/",
  timeout: 4000,
});

const TOUR_ENDPOINT = "/tours/viewer/";

export async function getTour(id: string, key: string) {
  const TOURS_FETCH_URL = `${TOUR_ENDPOINT + id + "?key=" + key}`;
  console.log(TOURS_FETCH_URL);
  const response = await instance.get(TOURS_FETCH_URL);
  return response.data.data;
}
