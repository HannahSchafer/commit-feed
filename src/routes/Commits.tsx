import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../contexts/Store";
import styled from 'styled-components';

function Commits() {
  const {
    state: { commitsData, formData },
    actions: { setCommits, setFormData, fetchCommits },
  } = useStoreContext();
  const { user, repo } = useParams();
  useEffect(() => {
    if (Object.keys(formData).length === 0) {
      const opts = { user, repository: repo };
      setFormData(opts);
      fetchCommits(opts);
    }
  }, [formData, setCommits]);

  return (
    <CommitsContainer aria-label="List of commits from selected repository">
      <StyledHeader>Commits Feed</StyledHeader>
      <StyledSubHeader>Showing results for \{user}\{repo}</StyledSubHeader>
      {commitsData.map((commitItem, i) => {
        return (
          <StyledCommitItem key={i}>
            <CommitContent style={{width: '200px'}}>{commitItem.commit.author.date}</CommitContent>
            <CommitContent style={{width: '800px'}}>
              <a href={commitItem.commit.url}>{commitItem.commit.message}</a>
            </CommitContent>
            <CommitContent>{commitItem.commit.author.name}</CommitContent>
          </StyledCommitItem>
        );
      })}
    </CommitsContainer>
  );
}

const CommitContent = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledHeader = styled.div`
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 8px;
`;

const StyledSubHeader = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 8px;
`;

const CommitsContainer = styled.div`
`;

const StyledCommitItem = styled.div`
  border-radius:  4px;
  box-shadow: 0px 1px 6px rgba(0.2, 0.2, 0.2, 0.2);
  display: flex;
  margin-bottom: 8px;
  padding: 4px;
  background-color: white;
`;

export default Commits;
