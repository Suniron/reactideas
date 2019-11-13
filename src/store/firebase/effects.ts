import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

export const initialize = () => {
  const config = {
    apiKey: "AIzaSyAK_79PR87UmUb-0DXTc1QaQvgmrj23Tzs",
    authDomain: "react-ideas.firebaseapp.com",
    databaseURL: "https://react-ideas.firebaseio.com",
    projectId: "react-ideas",
    storageBucket: "react-ideas.appspot.com",
    messagingSenderId: "975241269458",
    appId: "1:975241269458:web:09e1dd0a18227240625d0b",
    measurementId: "G-CQ3SNCHBEP"
  };

  return firebase.initializeApp(config);
};

export const signin = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    throw error;
  }
};

export const signout = async () => {
  return firebase.auth().signOut();
};

export const signup = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const userCred = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (!userCred.user) {
      return false;
    }
    userCred.user.sendEmailVerification();
    return true;
  } catch (error) {
    throw error;
  }
};
