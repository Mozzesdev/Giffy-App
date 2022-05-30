import { useEffect, useState } from "react";
import getSingleGif from "../utils/getSingleGif";
import { useGifs } from "./useGifs";

export default function useSingleGif(id) {
  const { gifs } = useGifs();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { data } = gifs
  const gifFromCache = data.find((gif) => gif.id === id)

  const [gif, setGif] = useState(gifFromCache);

  useEffect(() => {
    if (!gif) {
      setLoading(true);
      getSingleGif(id)
        .then((gif) => {
          setGif(gif);
          setError(false);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    }
  }, [id, gif]);

  return { gif, loading, error };
}
