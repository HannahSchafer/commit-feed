import React, { ForwardedRef } from "react";
import styled from "styled-components";
import moment from "moment";
import { ICommitItem } from "../../types/types";
import ListItem from "../../baseComponents/ListItem/ListItem";

interface CommitItemProps {
  commitItem: ICommitItem;
  ref?: ForwardedRef<HTMLInputElement>;
}

const CommitItem = React.forwardRef<HTMLInputElement, CommitItemProps>(
  ({ commitItem }, ref) => {
    const humanizedDate = moment(commitItem.commit.author.date).format(
      "MMMM DD, YYYY h:mm A"
    );
    const commitBody = (
      <ListItem showVerificationBar>
        <CommitContentContainer>
          <DateContainer>{humanizedDate}</DateContainer>
          <CommitContainer>
            <a href={commitItem.commit.url}>{commitItem.commit.message}</a>
          </CommitContainer>
          <AuthorContainer>{commitItem.commit.author.name}</AuthorContainer>
        </CommitContentContainer>
      </ListItem>
    );

    const content = ref ? (
      <article aria-label="commit-item-with-ref" ref={ref}>
        {commitBody}
      </article>
    ) : (
      <article aria-label="commit-item">{commitBody}</article>
    );

    return content;
  }
);

const DateContainer = styled.div`
  font-weight: 500;
  min-width: 200px;
  width: 200px;

  @media (max-width: 768px) {
    margin-bottom: 4px;
  }
`;

const CommitContainer = styled.div`
  white-space: nowrap;
  margin-inline: 16px;
  max-width: 800px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    margin-bottom: 4px;
    margin-inline: 0;
    max-width: 600px;
  }
`;

const AuthorContainer = styled.div`
  min-width: 140px;
`;

const CommitContentContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default CommitItem;
