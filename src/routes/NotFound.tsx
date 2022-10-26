import React from "react";
import Detective from "../assets/detective.png";
import { useNavigate } from "react-router-dom";
import Button from "../baseComponents/Button/Button";
import getCopy from "./../utils/getCopy";
import styled from "styled-components";

function NotFound() {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer aria-label="User or Repository not found">
      <div>
        <StyledHeader>{getCopy("notFoundHeading")}</StyledHeader>
        <StyledSubHeader>{getCopy("notFoundSubHeading")}</StyledSubHeader>
        <ButtonContainer>
          <Button onClick={() => handleClickHome()}>{getCopy("home")}</Button>
        </ButtonContainer>
      </div>
      <StyledImg
        src={Detective}
        alt="A drawing of a young detective holding a magnifying glass"
      />
    </NotFoundContainer>
  );
}

const ButtonContainer = styled.div`
  max-width: 200px;
`;

const StyledHeader = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 48px;
  padding-bottom: 16px;
`;

const StyledSubHeader = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 24px;
  padding-bottom: 16px;
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
