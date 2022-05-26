import { useNearScreen } from "../hooks/useNearScreen";
import { lazy, Suspense } from "react";
import Spinner from "./Spinner";

const Trending = lazy(() => import("./Trending"));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "0px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <Trending /> : <Spinner />}
      </Suspense>
    </div>
  );
}
