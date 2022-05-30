import { API_KEY, API_URL } from "./settings";

const fromApiResponse = (apiResponse) => {
  const { data } = apiResponse;
  const {
    id,
    title,
    images: {
      downsized_medium: { url },
    },
  } = data;

  const gif = { id, title, url };

  return gif;
};

export default function getRandomGif(tag) {
  return fetch(`${API_URL}/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=r`)
    .then((res) => res.json())
    .then(fromApiResponse);
}
