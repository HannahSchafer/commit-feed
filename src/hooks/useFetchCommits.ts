import { useState, useEffect } from "react";
import { getCommits } from "../api";
import { ICommitItem } from "../types/types";

const useFetchCommits = (
  pageNumber: number = 1,
  user: string = "",
  repo: string = ""
) => {
  const [commits, setCommits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    const controller = new AbortController();

    getCommits({
      signal: controller.signal,
      page: pageNumber,
      user: user,
      repository: repo,
    })
      .then((commitData) => {
        // @ts-ignore
        setCommits((prev) => [...(prev as any), ...commitData]);
        setHasNextPage(Boolean(commitData.length));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (controller.signal.aborted) {
          return;
        }
        setHasError(true);
      });

    return () => controller.abort();
  }, [pageNumber, user, repo]);

  return { isLoading, hasError, commits, hasNextPage };
};

export default useFetchCommits;
