import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN
})

const myHeaders = new Headers({
    'Authorization':  `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
});

export async function getCommits() {
  await octokit.request('GET /repos/{owner}/{repo}/commits', {
    RequestHeaders: myHeaders,
    owner: 'm3db',
    repo: 'm3',
    per_page: 40,
  }).then((ressult) => console.log("RES", ressult))
}
