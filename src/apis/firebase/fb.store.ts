import fb from './fb';

const db = fb.firestore();

export const signInUserDB = async (username: string, email: string) => {
  const findResponse = await db
    .collection('users')
    .where('email', '==', email)
    .get();

  let userVar: any;

  if (!findResponse.empty) {
    findResponse.forEach((doc) => {
      userVar = {
        id: doc.id,
        ...doc.data(),
      };
    });
  } else {
    const addResponse = await db.collection('users').add({
      username,
      email,
      victims: [],
      postings: [],
    });

    console.log(addResponse.id);
    userVar = {
      id: addResponse.id,
      username,
      email,
      victims: [],
      postings: [],
    };
  }

  return userVar;
};

export const deleteAccountDB = async (id: string) => {
  db.collection('users').doc(id).delete();
};
