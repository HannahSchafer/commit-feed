import React, { useState } from "react";
import Search from "../assets/search.png";
import { useNavigate } from "react-router-dom";
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
            type="text"
            name="repository"
            placeholder="Ex: m3"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Ex: m3")}
            onChange={(e) => setRepository(e.target.value)}
            value={repository}
          />
        </StyledLabel>
        <StyledSubmit
          disabled={isSubmitDisabled}
          type="submit"
          value="Submit"
        />
      </StyledForm>
      <StyledImg src={Search} alt="A drawing of a magniifying glass" />
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

const StyledInput = styled.input`
  margin-left: 16px;
  border-radius: 6px;
  font-family: sans-serif;
  font-weight: 600;
  height: 24px;
  padding-left: 4px;
`;

const StyledSubmit = styled.input.attrs(
  (props: { disabled: boolean }) => props
)`
  background-color: ${(props) =>
    props.disabled ? COLORS.gray80 : COLORS.black};
  border: none;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  color: ${COLORS.white};
  font-family: sans-serif;
  font-weight: 600;
  height: 36px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
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
