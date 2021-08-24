import fb from './fb';

const db = fb.firestore();

export const manageUserDB = async (username: string, email: string) => {
  const findResponse = await db
    .collection('users')
    .where('email', '==', email)
    .get();

  let result: any;

  if (!findResponse.empty) {
    findResponse.forEach((doc) => {
      result = doc.data();
    });
  } else {
    db.collection('users').add({
      username,
      email,
      victims: [],
      postings: [],
    });
    result = null;
  }

  return result;
};
