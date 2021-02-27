import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function registerForm() {
  return (
    <KeyboardAwareScrollView>
      <View>
        <Input
          placeholder="Correo electronico"
          containerStyle={styles.inputForm}
        />
        <Input
          password={true}
          secureTextEntry={true}
          placeholder="Password"
          containerStyle={styles.inputForm}
        />
        <Input
          password={true}
          secureTextEntry={true}
          placeholder="Confirmar Password"
          containerStyle={styles.inputForm}
        />
        <Button
          title="Registrarse"
          containerStyle={styles.btnContainerRegister}
          buttonStyle={styles.btnRegister}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
});
