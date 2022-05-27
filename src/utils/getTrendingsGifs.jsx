import { API_KEY, API_URL } from "./settings";

const fetchGifs = async () => {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.data;
};


export const getTrendingGifs = async () => {
  const gifs = await fetchGifs();
  return gifs;
};
