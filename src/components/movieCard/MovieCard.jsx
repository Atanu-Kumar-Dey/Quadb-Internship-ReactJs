import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Img from "../lazyLoadingComponents/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

const MovieCard = ({ posterurl, genres, rating, name, premiered, id }) => {
  const navigate = useNavigate();

  return (
    <div className="movieCard">
      <div className="posterBlock">
        <Img className="posterImg" src={posterurl} />

        <React.Fragment>
          <CircleRating rating={rating} />
          <Genres data={genres} />
        </React.Fragment>
      </div>
      <div className="textBlock">
        <span className="title">{name}</span>
        <span className="date">{dayjs(premiered).format("MMM D, YYYY")}</span>
        <span className="seeMore" onClick={() => navigate(`/summery/${id}`)}>
          See More...
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
