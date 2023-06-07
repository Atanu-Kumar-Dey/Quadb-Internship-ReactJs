import React from "react";
import "./style.scss";
const Genres = ({ data }) => {

  return (
    <div className="genres">
      {data.map((item)=>{
        return (
          <div  className="genre">
           {item}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
