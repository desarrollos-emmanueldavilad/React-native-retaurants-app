import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import Loading from "../../components/Loading";
export default function Account() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // if(!user){
      //   setLogin(false)
      // }else{
      //   setLogin(true)
      // }

      //console.log("User", user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} texto="Cargando..." />;
  }

  return login ? <UserLogged /> : <UserGuest />;
}
