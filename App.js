import React from "react";
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/enviroments/firebase";
import * as firebase from "firebase";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
