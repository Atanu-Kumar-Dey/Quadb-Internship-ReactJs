import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import MovieCard from "../../components/movieCard/MovieCard";
import ContentWrapper from "../../components/wrapperComponent/ContentWrapper";
function ShowList() {
  const { shows } = useSelector((state) => state.showSlice);

  return (
    <div className="searchResultsPage">
      <ContentWrapper>
        <>
          <div className="content">
            {shows.map((movie) => (
              <MovieCard
                key={movie.id}
                posterurl={movie.image && movie.image.original}
                genres={movie.genres && movie.genres}
                rating={movie.rating && movie.rating.average}
                name={movie.name}
                premiered={movie.premiered}
                id={movie.id}
              />
            ))}
          </div>
        </>
      </ContentWrapper>
    </div>
  );
}

export default ShowList;
