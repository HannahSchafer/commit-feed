import React from "react";
import Detective from "../assets/detective.png";
import { useNavigate } from "react-router-dom";
import Button from "../baseComponents/Button/Button";
import styled from 'styled-components';

function NotFound() {
  const navigate = useNavigate();

  const handleClickHome = () =>  {
    navigate("/");
  }

  return (
    <NotFoundContainer aria-label="User or Repository could not be found">
      <div>
        <StyledHeader>Page Not Found</StyledHeader>
        <StyledSubHeader>
          We searched high and low but couldn't find what you're looking for.
          Let's find a better place for you to go.
        </StyledSubHeader>
        <ButtonContainer>
        <Button onClick={() => handleClickHome()}>
          Home
        </Button>
        </ButtonContainer>
      </div>
      <StyledImg src={Detective} alt="Green CDs" />
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
