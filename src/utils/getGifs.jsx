import { API_KEY, API_URL } from "./settings";

const fetchGifs = async ({ keyword, limit, page }) => {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=r&lang=es`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const mapFromApiToGif = (apiResponse) => {
  const { data, pagination } = apiResponse;
  const dataMap = data.map((gifFromApi) => {
    const {
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    } = gifFromApi;

    return { id, title, url };
  });
  const gifsInfo = { data: dataMap, pagination: pagination };
  return gifsInfo;
};

export const getAllGIfs = async ({
  keyword = "Morty",
  limit = 15,
  page = 0,
}) => {
  const gifs = await fetchGifs({ keyword, limit, page });
  return mapFromApiToGif(gifs);
};
