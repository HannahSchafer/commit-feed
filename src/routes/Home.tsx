import React, { useState } from "react";
import { useStoreContext } from "../contexts/Store";
import { useNavigate } from "react-router-dom";

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
    <div aria-label="Page to input Github user and repository name">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Github user or organization name:
          <input
            type="text"
            name="githubUser"
            onChange={(e) => setGithubUser(e.target.value)}
          />
        </label>
        <label>
          Repository name:
          <input
            type="text"
            name="repository"
            onChange={(e) => setRepository(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Home;
