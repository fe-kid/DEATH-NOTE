import fb from './fb';

const provider = new fb.auth.GoogleAuthProvider();

export const googleSignIn = async () => {
  const res = await fb.auth().signInWithPopup(provider);

  return res.user;
};

export const googleSignOut = () => {
  fb.auth().signOut();
};
