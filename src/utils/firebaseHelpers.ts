import firebase from "firebase/app";
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
  const app = firebase.initializeApp(config);

  return app;
};

const db = initialize().firestore();

// -- QUIZBUILDER --
// TODO: make a "Quiz" collection on Firebase/quizbuilder to put all quiz
// TOTO: Modify rules
export const getAllQuiz = () => {
  const quizCollection = db.collection("quizbuilder");
  quizCollection
    .get()
    .then(doc => {
      console.log("DOC", doc);
    })
    .then(err => console.log("errDOC", err));
};
