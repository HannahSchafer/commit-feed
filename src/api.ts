import { Octokit } from "octokit";
import { IParams } from "./types/types";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

const myHeaders = new Headers({
  Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
});

export const getCommits = async (opts: IParams) => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    RequestHeaders: myHeaders,
    owner: opts.user,
    repo: opts.repository,
    per_page: 40,
    page: opts.page,
    signal: opts.signal,
  });
  return response.data;
};
