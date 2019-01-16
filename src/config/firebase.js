import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCkexqRYya5sH9uCgjzC4erm43r_cvXHz0",
  authDomain: "my-practice-project-f6467.firebaseio.com",
  databaseURL: "https://my-practice-project-f6467.firebaseio.com/"
};

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");

export const dataRef = databaseRef.child("data");
