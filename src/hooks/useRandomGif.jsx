import { useEffect, useState } from "react";
import getRandomGif from "../utils/getRandomGif";

export default function useRandomGif({ tag }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [randomGif, setRandomGif] = useState({});

  useEffect(() => {
    setLoading(true);
    getRandomGif(tag)
      .then((gif) => {
        setRandomGif(gif);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { randomGif, loading, error };
}
