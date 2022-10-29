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
      <ListItem>
        <CommitContainer>
          <CommitContent style={{ minWidth: "200px", width: "200px", fontWeight: "500" }}>
            {humanizedDate}
          </CommitContent>
          <CommitContent style={{ width: "800px", marginInline: "16px" }}>
            <a href={commitItem.commit.url}>{commitItem.commit.message}</a>
          </CommitContent>
          <CommitContent style={{ minWidth: "140px" }}>{commitItem.commit.author.name}</CommitContent>
        </CommitContainer>
      </ListItem>
    );

    const content = ref ? (
      <article ref={ref}>{commitBody}</article>
    ) : (
      <article>{commitBody}</article>
    );

    return content;
  }
);

const CommitContent = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CommitContainer = styled.div`
  display: flex;
`;

export default CommitItem;
