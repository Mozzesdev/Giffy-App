import { useEffect, useState } from "react";
import { getTrendingGifs } from "../utils/getTrendingsGifs";
import Category from "./Category";

const Trending = () => {
 const [trends, setTrends] = useState([]);

 useEffect(() => {
   getTrendingGifs().then(setTrends);
 }, []);

 return <Category name="Trendings" options={trends} />;
};

export default Trending