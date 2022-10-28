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
      <StyledImg
        src={Detective}
        alt="A drawing of a young detective holding a magnifying glass"
      />
    </NotFoundContainer>
  );
}

const LinkContainer = styled.div`
  max-width: 200px;
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
`;

const StyledImg = styled.img`
  width: 480px;
  height: 480px;
`;

export default NotFound;
