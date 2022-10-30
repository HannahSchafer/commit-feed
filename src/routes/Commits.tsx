import React, { useEffect, useCallback, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import getCopy from "./../utils/getCopy";
import styled from "styled-components";
import RouteLink from "../baseComponents/RouteLink/RouteLink";
import SkeletonLoader from "../baseComponents/SkeletonLoader/SkeletonLoader";
import CommitsList from "../components/CommitsList/CommitsList";
import Padded from "../baseComponents/Padded/Padded";
import { COLORS } from "../baseComponents/Palette/Palette";

function Commits() {
  const { user, repo } = useParams();
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <CommitsContainer aria-label="List of commits from selected repository">
      <Padded bottom={"8"}>
        <HeaderContainer>
          <div>
            <StyledHeader>{getCopy("commitsFeedHeading")}</StyledHeader>
            <Padded bottom={"8"}>
              <StyledSubHeader>
                {getCopy("commitsFeedSubHeading")} \{user}\{repo}
              </StyledSubHeader>
            </Padded>
          </div>
          <RouteLink to="/" aria-label="new-search">
            {getCopy("newSearch")}
          </RouteLink>
        </HeaderContainer>
      </Padded>
      <CommitsList />
    </CommitsContainer>
  );
}

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 16px;
  }
`;

const StyledHeader = styled.h1`
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const StyledSubHeader = styled.h2`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

const CommitsContainer = styled.div``;

export default Commits;
