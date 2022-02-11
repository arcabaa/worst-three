import axios from "axios";
const authToken = "RGAPI-90812dcb-a8be-410b-8fe4-5c6351ecd101";

export const axiosWithHeader = axios.create({
  headers: {
    "X-Riot-Token": "RGAPI-90812dcb-a8be-410b-8fe4-5c6351ecd101",
  },
  baseURL: "https://na1.api.riotgames.com",
});
