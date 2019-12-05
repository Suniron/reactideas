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

const firestore = initialize().firestore();

// -- QUIZBUILDER --
// TODO: make a "Quiz" collection on Firebase/quizbuilder to put all quiz
// TOTO: Modify rules
export const getAllQuiz = () => {
  firestore
    .collection("quizbuilder")
    .get()
    .then(doc => {
      console.log("DOC", doc);
    })
    .then(err => console.log("errDOC", err));
};

/*
return await firebaseFirestore
    .collection("words")
    .get()
    .then(docs => {
      const allWords: Array<Word> = [];

      docs.forEach(doc => {
        // Pour chaque mot matchant, l'enregistrer dans la liste:
        const tempDoc = doc.data();
        const tempWord: Word = {
          title: tempDoc.title,
          subtitle: tempDoc.subtitle,
          description: tempDoc.description,
          createdBy: tempDoc.createdBy,
          createdDate: tempDoc.createdDate.toDate(), //TODO: convert,
          editedBy: tempDoc.editedBy,
          editedDate: tempDoc.editedDate.toDate() // TODO: convert
        };
        allWords.push(tempWord);
      });

      return allWords;
    })
    .catch(error => {
      console.log("Erreur de récupèration:", error);
      return null;
    });
    */
