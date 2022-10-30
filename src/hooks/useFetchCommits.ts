import { useState, useEffect } from "react";
import { getCommits } from "../api/api";
import { ICommitItem } from "../types/types";

const useFetchCommits = (
  pageNumber: number = 1,
  user: string = "",
  repo: string = "",
  setCommitsToStore: (commits: ICommitItem[]) => void
) => {
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
        setCommitsToStore(commitData as ICommitItem[]);
        setHasNextPage(Boolean(commitData.length));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (controller.signal.aborted) {
          return;
        }
        setHasError(true);
        // TODO: add reporting to 3rd party logging (ex: Bugsnag)
      });

    return () => controller.abort();
  }, [pageNumber, user, repo]);

  return { isLoading, hasError, hasNextPage };
};

export default useFetchCommits;
