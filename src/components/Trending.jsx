import { useEffect, useState } from "react";
import { getTrendingGifs } from "../utils/getTrendingsGifs";
import Category from "./Category";
import Spinner from "./Spinner";

const Trending = () => {
 const [trends, setTrends] = useState([]);

 useEffect(() => {
   getTrendingGifs().then(setTrends);
 }, []);

 return trends ? <Category name="Trendings" options={trends} /> : <Spinner />;
};

export default Trending