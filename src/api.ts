import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN
})

const myHeaders = new Headers({
    'Authorization':  `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
});

export async function getCommits(opts: any) {
  const cooo = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    RequestHeaders: myHeaders,
    owner: opts.user,
    repo: opts.repository,
    per_page: 40,
  }).then((ressult) => {
    return ressult
  })

  return cooo
}
