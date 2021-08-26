export interface Victim {
  name: string;
  img: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  killedCount: number;
  victims: Victim[];
  postings: string[];
}

export interface CurrentCriminal {
  address: string;
  name: string;
  img: string;
}

export interface Post {
  id: string;
  writtenUserName: string;
  writtenUserId: string;
  writtenDate: string;
  content: string;
}
