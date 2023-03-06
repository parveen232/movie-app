import { useParams } from "react-router-dom";

export default function Details() {
  const { movieId } = useParams();

  return (
    <>
      <h1>Movie</h1>
      <h2>{movieId}</h2>
    </>
  );
}
