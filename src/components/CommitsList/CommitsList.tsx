import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchCommits from "../../hooks/useFetchCommits";
import { useCommitsContext } from "../../contexts/CommitsContext";
import CommitItem from "../CommitItem/CommitItem";
import SkeletonListLoader from "../../baseComponents/SkeletonLoader/SkeletonListLoader";
import { PATHS } from "../../constants";
import styled from "styled-components";
import { ICommitItem } from "../../types/types";

export default function CommitsList() {
  const [pageNumber, setPageNumber] = useState(1);
  const { user, repo } = useParams();
  const {
    state: { commitsData },
    actions: { setCommits },
  } = useCommitsContext();

  const { hasNextPage, hasError, isLoading } = useFetchCommits(
    pageNumber,
    user,
    repo,
    setCommits
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (hasError) {
      navigate("/does/not/exist");
    }
  }, [hasError, navigate]);

  let intersectionObserver = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (commit: HTMLInputElement) => {
      if (isLoading) return;

      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }

      intersectionObserver.current = new IntersectionObserver((commits) => {
        if (commits[0].isIntersecting && hasNextPage) {
          setPageNumber((prev) => prev + 1);
        }
      });

      if (commit) {
        intersectionObserver.current?.observe(commit);
      }
    },
    [hasNextPage, isLoading]
  );

  return (
    <CommitsListContainer>
      {commitsData?.map((commitItem, index) => {
        if (commitsData.length === index + 1) {
          return (
            <CommitItem
              commitItem={commitItem}
              key={index}
              ref={lastElementRef}
            />
          );
        }
        return <CommitItem commitItem={commitItem} key={index} />;
      })}
      {isLoading && <SkeletonListLoader numRows={20}></SkeletonListLoader>}
    </CommitsListContainer>
  );
}

const CommitsListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;
