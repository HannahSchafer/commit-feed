export interface IAuthor {
  name: string;
  email: string;
  date: string;
}

export interface ICommit {
  author: IAuthor;
  committer: ICommitter;
  message: string;
  tree: ITree;
  url: string;
  comment_count: number;
  verification: IVerification;
}

export interface ICommitItem {
  sha: string;
  node_id: string;
  commit: ICommit;
}

export interface ICommitter {
  name: string;
  email: string;
  date: string;
}

export interface IParams {
  user: string;
  repository: string;
  page: number;
  signal: AbortSignal;
}

export interface ITranslation {
  commitsFeedHeading: string;
  commitsFeedSubHeading: string;
  githubUserLabel: string;
  home: string;
  newSearch: string;
  notFoundSubHeading: string;
  notFoundHeading: string;
  repoNameLabel: string;
  submit: string;
}

export interface ITranslations {
  enUS: ITranslation;
}

export interface ITree {
  sha: string;
  url: string;
}

export interface IVerification {
  verified: boolean;
  reason: string;
  signature: string;
  payload: string;
}
