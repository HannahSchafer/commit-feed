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
  commentCount: number;
  verification: IVerification;
}

export interface ICommitItem {
  sha: string;
  nodeId: string;
  commit: ICommit;
}

export interface ICommitter {
  name: string;
  email: string;
  date: string;
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

export interface IParams {
  user: string;
  repository: string;
  page: number;
  signal: any;
}
