interface Victim {
  name: string;
  img: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  victims: Victim[];
  postings: string[];
}
