import { useEffect, useState } from "react";
import { useGif } from "../context/gifContext";
import { getAllGIfs } from "../utils/getGifs";

const INITIAL_PAGE = 0;

export const useGifs = ({ keyword, limit } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useGif();

  const keywordToUse = keyword || localStorage.getItem("lastKeyword");

  useEffect(() => {
    setLoading(true);
    getAllGIfs({ keyword: keywordToUse, limit }).then((gif) => {
      setGifs(gif);
      setLoading(false);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingPage(true);
    getAllGIfs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setLoadingPage(false);
      setGifs((prevGifs) => {
        const { data, pagination } = prevGifs
        return {data: [...data, ...nextGifs.data], pagination: pagination}
      });
    });
  }, [page, keywordToUse]);

  return { loading, loadingPage, gifs, setPage };
};
