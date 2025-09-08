import { StarIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import timeFormat from "../lib/timeFormat";
import { useAppContext } from "../context/AppContext";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { image_base_url } = useAppContext();
  return (
    <div className="flex flex-col justify-between bg-[#23283b] rounded w-[240px] h-[320px]  p-0">
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={image_base_url + movie.backdrop_path}
        className="w-full h-[180px] object-cover object-center cursor-pointer"
      />

      <div className="flex flex-col px-5 pt-3 flex-1">
        <h3 className="text-base font-semibold text-white mb-1">{movie.title}</h3>
        <p className="text-sm text-gray-400 mb-4">
          {new Date(movie.release_date).getFullYear()} &bull;{" "}
          {movie.genres.slice(0, 2).map((genre) => genre.name).join(" | ")} &bull; {timeFormat(movie.runtime)}
        </p>
        <div className="flex items-center justify-between mt-auto pb-4">
          <button
            onClick={() => {
              navigate(`/movies/${movie._id}`);
              scrollTo(0, 0);
            }}
            className="px-4 py-2 text-sm bg-[#f15b6c] hover:bg-[#e14a5a] transition rounded-full font-medium text-white cursor-pointer"
          >
            Buy Tickets
          </button>
          <div className="flex items-center gap-1 text-sm text-[#f15b6c] font-semibold">
            <StarIcon className="w-4 h-4 fill-[#f15b6c] text-[#f15b6c]" />
            {movie.vote_average.toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
