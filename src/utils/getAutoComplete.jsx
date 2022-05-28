import { API_KEY, API_URL } from "./settings";

const generateUUID = () => {
  var d = new Date().getTime();
  var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

const fetchGifs = async ({ keyword, limit }) => {
  const apiUrl = `${API_URL}/gifs/search/tags?api_key=${API_KEY}&q=${keyword}&limit=${limit}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const mapFromApiGifs = (apiResponse) => {
  const { data, pagination } = apiResponse;
  const dataMap = data.map((gifFromApi) => {
    const { name } = gifFromApi;
    
    return { name, id: generateUUID() };
  });
  const gifsInfo = { data: dataMap, pagination: pagination };
  return gifsInfo;
};

export default async function getAutoComplete(keyword) {
  const gifs = await fetchGifs({ keyword, limit: 3 });
  return mapFromApiGifs(gifs);
}
