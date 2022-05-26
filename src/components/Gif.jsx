import { memo } from "react";
import { Link } from "wouter";

const Gif = ({ title, id, url }) => {
  return (
    <Link to={`/gif/${id}`}>
      <img src={url} alt={title} />
    </Link>
  );
};

export default memo(Gif, (prev, next)=> {
  return prev.id === next.id;
});
