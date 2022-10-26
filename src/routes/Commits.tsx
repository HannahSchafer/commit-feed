import React, { useEffect, useCallback, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../contexts/Store";
import { useNavigate } from "react-router-dom";
import getCopy from "./../utils/getCopy";
import styled from "styled-components";
import Button from "../baseComponents/Button/Button";
import SkeletonLoader from "../baseComponents/SkeletonLoader/SkeletonLoader";
import CommitList from "../components/CommitList/CommitList";

function Commits() {
  const {
    state: { commitsData, formData },
    actions: { setCommits, setFormData },
  } = useStoreContext();
  const { user, repo } = useParams();
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <CommitsContainer aria-label="List of commits from selected repository">
      <HeaderContainer>
        <div>
          <StyledHeader>{getCopy("commitsFeedHeading")}</StyledHeader>
          <StyledSubHeader>
            {getCopy("commitsFeedSubHeading")} \{user}\{repo}
          </StyledSubHeader>
        </div>
        <ButtonContainer>
          <Button onClick={() => handleClickHome()}>
            {getCopy("newSearch")}
          </Button>
        </ButtonContainer>
      </HeaderContainer>
      <CommitList />
    </CommitsContainer>
  );
}

const ButtonContainer = styled.div`
  height: 24px;
`;

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
`;

const StyledHeader = styled.h1`
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;
`;

const StyledSubHeader = styled.h2`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 8px;
`;

const CommitsContainer = styled.div``;

export default Commits;
