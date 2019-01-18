import firebase from "firebase";
import { devConfig } from "./config";

firebase.initializeApp(devConfig);

export const auth = firebase.auth();
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");

export const dataRef = databaseRef.child("data");
