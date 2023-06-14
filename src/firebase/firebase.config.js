// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVkWDsymEwfqaE4R_D6qS9kCWvy47lV6g",
  authDomain: "portfolio-a8644.firebaseapp.com",
  projectId: "portfolio-a8644",
  storageBucket: "portfolio-a8644.appspot.com",
  messagingSenderId: "535878332283",
  appId: "1:535878332283:web:253a7119b173b25dae57de",
  measurementId: "G-YNRQL5GXP6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore();

// import React, { createContext, useContext, useState, useEffect } from "react";
// import {
//   collection,
//   getDocs,
//   onSnapshot,
//   orderBy,
//   query,
//   where,
// } from "firebase/firestore";
// import { db } from "../../firebase.config";
