import React from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../wrapperComponent/ContentWrapper";
import "./style.scss";

const Header = () => {
const navigate = useNavigate();
  return (
    <header >
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          Movie Library
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
