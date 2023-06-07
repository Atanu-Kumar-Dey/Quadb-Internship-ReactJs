import React, {  useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { setShowForm } from "../../store/showSlice";
import { GoLinkExternal } from "react-icons/go";
import "./style.scss";
import ContentWrapper from "../../components/wrapperComponent/ContentWrapper";
import Genres from "../../components/genres/Genres";
import CircleRating from "../../components/circleRating/CircleRating";
import Img from "../../components/lazyLoadingComponents/Img";
import Form from "../../components/form/Form";

const Summery = () => {
  const {showForm} = useSelector((state)=>state.showSlice)
  const dispatch = useDispatch();
  const { id } = useParams();
  const { shows } = useSelector((state) => state.showSlice);
  let showObj = {};
  for (const obj of shows) {
    if (obj.id == id) {
      showObj = obj;
      break;
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    if (showForm) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      // Enable scrolling when the form is closed
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    }
    // Cleanup the effect when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    };
  }, [showForm]);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  // if (shows.length>0) {
  //   console.log(showObj.network)
  // }
  return (
    <div className="summerySection">
      {shows.length > 0 && (
        <div>
          <div className="backgroundImg">
            <Img src={showObj.image.original}></Img>
          </div>
          <div className="opacity-layer"></div>
          <ContentWrapper>
            <div className="content">
              <div className="left">
                <Img className="posterImg" src={showObj.image.original} />
              </div>
              <div className="right">
                <div className="title">
                  {`${showObj.name}(${dayjs(showObj.premiered).format(
                    "YYYY"
                  )})`}
                </div>
                <div className="link">
                  <a
                    href={showObj.url}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginRight: "5px",
                      fontSize: "16px",
                    }}
                    target="_blank">
                    Go to Official Page
                  </a>
                  <GoLinkExternal />
                </div>
                <Genres data={showObj.genres} />
                <div className="row">
                  <CircleRating rating={showObj.rating.average} />
                  <button
                    className="bookShow"
                    onClick={() => dispatch(setShowForm())}>
                    Book Movie
                  </button>
                </div>
                <div className="overview">
                  <div className="heading">Summary</div>
                  <div className="description">
                    {showObj.summary.replace(/<\/?(p|b)>/g, "")}
                  </div>
                </div>
                <div className="info">
                  <div className="infoItem">
                    <span className="text bold">Status: </span>
                    <span className="text">{showObj.status}</span>
                  </div>

                  <div className="infoItem">
                    <span className="text bold">Last Premiered: </span>
                    <span className="text">
                      {dayjs(showObj.premiered).format("MMM D, YYYY")}
                    </span>
                  </div>

                  {showObj?.averageRuntime && (
                    <div className="infoItem">
                      <span className="text bold">Run Time: </span>
                      <span className="text">
                        {toHoursAndMinutes(showObj.averageRuntime)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="info">
                  <div className="infoItem">
                    <span className="text bold">Language: </span>
                    <span className="text">{showObj.language}</span>
                  </div>

                  <div className="infoItem">
                    <span className="text bold">Type: </span>
                    <span className="text">{showObj.type}</span>
                  </div>

                  {showObj?.averageRuntime && (
                    <div className="infoItem">
                      <span className="text bold">Weight: </span>
                      <span className="text">{showObj.weight}</span>
                    </div>
                  )}
                </div>
                <div className="info">
                  <div className="infoItem">
                    <span className="text bold">Region: </span>
                    {showObj.network === null ? (
                      <span className="text">
                        {showObj.webChannel.country.name}
                        {", "}
                        {showObj.webChannel.country.code}
                        {", "}
                        {showObj.webChannel.country.timezone}
                      </span>
                    ) : (
                      <span className="text">
                       {showObj.network.country.name}
                        {", "}
                        {showObj.network.country.code}
                        {", "}
                        {showObj.network.country.timezone}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ContentWrapper>
          {showForm && <Form movieName={`${showObj.name}(${showObj.id})`} />}
        </div>
      )}
    </div>
  );
};

export default Summery;
