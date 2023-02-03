import axios from "axios";
import type { Tour } from "@/types/tour";
import type { Hotspot } from "@/types/hotspot";

const instance = axios.create({
  baseURL: "https://api.bimtours.dev/v1/",
  timeout: 4000,
});

const TOUR_ENDPOINT = "/tours/viewer/";

export async function getTour(tourid: string, key: string): Promise<Tour> {
  const TOURS_FETCH_URL = `${TOUR_ENDPOINT + tourid + "?key=" + key}`;
  const response = await instance.get(TOURS_FETCH_URL);
  return response.data.data;
}

export async function getHotspot(
  tourid: string,
  hotspotId: string,
  key: string
): Promise<Hotspot[]> {
  const TOURS_FETCH_URL = `${
    TOUR_ENDPOINT + tourid + "/hotspots/" + hotspotId + "?key=" + key
  }`;
  const response = await instance.get(TOURS_FETCH_URL);
  return response.data.data;
}
