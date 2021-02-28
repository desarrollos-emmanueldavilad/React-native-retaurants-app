import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash";
export default function registerForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setshowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());

  const onSubmit = () => {
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      console.log("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      console.log("El email no es correcto");
    } else if (formData.password !== formData.repeatPassword) {
      console.log("Las contraseñas tienen que ser iguales");
    } else if (size(formData.password) < 6) {
      console.log("La contraseña tiene que tener al menos 6 caracteres");
    } else {
      // setLoading(true);
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(formData.email, formData.password)
      //   .then(() => {
      //     setLoading(false);
      //     navigation.navigate("account");
      //   })
      //   .catch(() => {
      //     setLoading(false);
      //     toastRef.current.show("El email ya esta en uso, pruebe con otro");
      //   });
    }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  return (
    <KeyboardAwareScrollView>
      <View>
        <Input
          placeholder="Correo electronico"
          containerStyle={styles.inputForm}
          rightIcon={
            <Icon
              type="material-community"
              name="at"
              iconStyle={styles.iconRight}
            />
          }
          onChange={(e) => onChange(e, "email")}
        />
        <Input
          password={true}
          secureTextEntry={showPassword ? false : true}
          placeholder="Password"
          containerStyle={styles.inputForm}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.iconRight}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          onChange={(e) => onChange(e, "password")}
        />
        <Input
          password={true}
          secureTextEntry={showRepeatPassword ? false : true}
          placeholder="Confirmar Password"
          containerStyle={styles.inputForm}
          rightIcon={
            <Icon
              type="material-community"
              name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.iconRight}
              onPress={() => setshowRepeatPassword(!showRepeatPassword)}
            />
          }
          onChange={(e) => onChange(e, "confirmPassword")}
        />
        <Button
          title="Registrarse"
          containerStyle={styles.btnContainerRegister}
          buttonStyle={styles.btnRegister}
          onPress={onSubmit}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

function defaultFormValue() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
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
    flex: 1,
    alignItems: "center",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
