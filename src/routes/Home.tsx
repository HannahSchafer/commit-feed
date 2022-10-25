import React, { useState } from "react";
import Search from "../assets/search.png";
import { useStoreContext } from "../contexts/Store";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { COLORS } from "../baseComponents/Palette/Palette";

function Home() {
  const {
    actions: { submitRepository },
  } = useStoreContext();
  const navigate = useNavigate();
  const [githubUser, setGithubUser] = useState("");
  const [repository, setRepository] = useState("");

  const handleSubmit = (e: any) => {
    submitRepository({ user: githubUser, repository: repository });
    navigate(`/${githubUser}/${repository}`);
    e.preventDefault();
  };

  return (
    <HomeContainer aria-label="Page to input Github user and repository name">
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <StyledLabel>
          Github user or organization name
          <StyledInput
            type="text"
            name="githubUser"
            onChange={(e) => setGithubUser(e.target.value)}
          />
        </StyledLabel>
        <StyledLabel>
          Repository name
          <StyledInput
            type="text"
            name="repository"
            onChange={(e) => setRepository(e.target.value)}
          />
        </StyledLabel>
        <StyledSubmit type="submit" value="Submit" />
      </StyledForm>
      <StyledImg src={Search} alt="Green CDs" />
    </HomeContainer>
  );
}

const StyledImg = styled.img`
  height: 150px;
  padding: 24px;
`;

const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledInput= styled.input`
  margin-left: 16px;
  border-radius: 6px;
  height: 24px;
`;

const StyledSubmit = styled.input`
  background-color: ${COLORS.black};
  border-radius: 6px;
  color: ${COLORS.white};
  height: 36px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  display: flex;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 24px;
  padding-bottom:  16px;
`;

export default Home;
