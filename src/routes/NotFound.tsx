import React from "react";
import Detective from "../assets/detective.png";
import { Link, useNavigate } from "react-router-dom";
import RouteLink from "../baseComponents/RouteLink/RouteLink";
import getCopy from "./../utils/getCopy";
import styled from "styled-components";
import { COLORS } from "../baseComponents/Palette/Palette";
import Padded from "../baseComponents/Padded/Padded";

function NotFound() {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer aria-label="User or Repository not found">
      <div>
        <StyledHeader>{getCopy("notFoundHeading")}</StyledHeader>
        <Padded bottom={"8"}>
          <StyledSubHeader>{getCopy("notFoundSubHeading")}</StyledSubHeader>
        </Padded>
        <LinkContainer>
          <RouteLink to="/" aria-label="home-link">
            {getCopy("home")}
          </RouteLink>
        </LinkContainer>
      </div>
      <ImgContainer>
        <StyledImg
          src={Detective}
          alt="A drawing of a young detective holding a magnifying glass"
        />
      </ImgContainer>
    </NotFoundContainer>
  );
}

const LinkContainer = styled.div`
  max-width: 200px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StyledHeader = styled.h1`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 48px;
  margin: 0;
`;

const StyledSubHeader = styled.h2`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 24px;
`;

const NotFoundContainer = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  @media (max-width: 768px) {
    margin-top: 4px;
  }
`;

const StyledImg = styled.img`
  display: block;
  object-fit: cover;
  max-width: 480px;
  max-height: 480px;

  @media (max-width: 768px) {
    max-width: 320px;
    max-height: 320px;
  }
`;

export default NotFound;
