import React, { useState } from "react";
import Search from "../assets/search.png";
import Padded from "../baseComponents/Padded/Padded";
import { Link, useNavigate } from "react-router-dom";
import RouteLink from "../baseComponents/RouteLink/RouteLink";
import styled from "styled-components";
import getCopy from "./../utils/getCopy";
import { COLORS } from "../baseComponents/Palette/Palette";

function Home() {
  const navigate = useNavigate();
  const [githubUser, setGithubUser] = useState("");
  const [repository, setRepository] = useState("");

  const handleSubmit = (e: any) => {
    navigate(`/${githubUser}/${repository}`);
    e.preventDefault();
  };

  const isSubmitDisabled = githubUser.length === 0 || repository.length === 0;
  return (
    <HomeContainer aria-label="Page to input Github user and repository name">
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <StyledLabel>
          {getCopy("githubUserLabel")}
          <StyledInput
            aria-label="github-user-input"
            type="text"
            name="githubUser"
            placeholder="Ex: m3db"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Ex: m3db")}
            onChange={(e) => setGithubUser(e.target.value)}
            value={githubUser}
          />
        </StyledLabel>
        <StyledLabel>
          {getCopy("repoNameLabel")}
          <StyledInput
            aria-label="repository-input"
            type="text"
            name="repository"
            placeholder="Ex: m3"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Ex: m3")}
            onChange={(e) => setRepository(e.target.value)}
            value={repository}
          />
        </StyledLabel>
        <RouteLink to={`/${githubUser}/${repository}`} aria-label="submit">
          {getCopy("submit")}
        </RouteLink>
      </StyledForm>
      <Padded all={"24"}>
        <StyledImg src={Search} alt="A drawing of a magniifying glass" />
      </Padded>
    </HomeContainer>
  );
}

const StyledImg = styled.img`
  height: 150px;
`;

const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  margin-left: 16px;
  border-radius: 6px;
  font-family: sans-serif;
  font-weight: 600;
  height: 24px;
  padding-left: 4px;
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
  padding-bottom: 16px;
`;

export default Home;
