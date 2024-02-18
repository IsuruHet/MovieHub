import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";
/*
const movie1 = {
  id: 59020,
  url: "https://yts.mx/movies/spider-man-lotus-2023",
  imdb_code: "tt13904644",
  title: "Spider-Man: Lotus",
  title_english: "Spider-Man: Lotus",
  title_long: "Spider-Man: Lotus (2023)",
  slug: "spider-man-lotus-2023",
  year: 2023,
  rating: 3.2,
  runtime: 120,
  genres: ["Action", "Drama"],
  summary:
    "Following the tragic death of his former girlfriend - seemingly caused by his own attempt to save her - Peter Parker (Warden Wayne) lingers in his guilt of the past, questioning whether the curse of his alter ego should be buried for good. When he's met by the news that a terminally ill child has requested to meet Spider-Man, Peter contemplates the decision to comfort him in his final days.—Gavin J. Konop",
  description_full:
    "Following the tragic death of his former girlfriend - seemingly caused by his own attempt to save her - Peter Parker (Warden Wayne) lingers in his guilt of the past, questioning whether the curse of his alter ego should be buried for good. When he's met by the news that a terminally ill child has requested to meet Spider-Man, Peter contemplates the decision to comfort him in his final days.—Gavin J. Konop",
  synopsis:
    "Following the tragic death of his former girlfriend - seemingly caused by his own attempt to save her - Peter Parker (Warden Wayne) lingers in his guilt of the past, questioning whether the curse of his alter ego should be buried for good. When he's met by the news that a terminally ill child has requested to meet Spider-Man, Peter contemplates the decision to comfort him in his final days.—Gavin J. Konop",
  yt_trailer_code: "",
  language: "en",
  mpa_rating: "",
  background_image:
    "https://yts.mx/assets/images/movies/spider_man_lotus_2023/background.jpg",
  background_image_original:
    "https://yts.mx/assets/images/movies/spider_man_lotus_2023/background.jpg",
  small_cover_image:
    "https://yts.mx/assets/images/movies/spider_man_lotus_2023/small-cover.jpg",
  medium_cover_image:
    "https://yts.mx/assets/images/movies/spider_man_lotus_2023/medium-cover.jpg",
  large_cover_image:
    "https://yts.mx/assets/images/movies/spider_man_lotus_2023/large-cover.jpg",
  state: "ok",
  torrents: [
    {
      url: "https://yts.mx/torrent/download/0E96680A7E2EC178EA5D536AFDEB0EA336355439",
      hash: "0E96680A7E2EC178EA5D536AFDEB0EA336355439",
      quality: "720p",
      type: "web",
      is_repack: "0",
      video_codec: "x264",
      bit_depth: "8",
      audio_channels: "2.0",
      seeds: 100,
      peers: 8,
      size: "1.08 GB",
      size_bytes: 1159641170,
      date_uploaded: "2024-01-06 22:54:52",
      date_uploaded_unix: 1704578092,
    },
    {
      url: "https://yts.mx/torrent/download/EEFADA5E4C31D71764D80353CE18262CF9EC6FBA",
      hash: "EEFADA5E4C31D71764D80353CE18262CF9EC6FBA",
      quality: "1080p",
      type: "web",
      is_repack: "0",
      video_codec: "x264",
      bit_depth: "8",
      audio_channels: "2.0",
      seeds: 100,
      peers: 12,
      size: "2 GB",
      size_bytes: 2147483648,
      date_uploaded: "2024-01-07 00:11:11",
      date_uploaded_unix: 1704582671,
    },
  ],
  date_uploaded: "2024-01-06 22:54:52",
  date_uploaded_unix: 1704578092,
};*/

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}query_term=${title}`);
    const data = await response.json();
    //console.log(data.data.movies);
    setMovies(data.data.movies);
    console.log(movies[0]);
  };

  useEffect(() => {
    searchMovies("Spider-Man");
  }, []);
  return (
    <div className="app">
      <h1>MovieHub</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
