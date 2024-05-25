import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import color from "../../utils/color";

const { width } = Dimensions.get("window");

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.loginImage}
        source={require("../../../assets/images/login.png")}
      />
      <View style={styles.subContainer}>
        <Text style={styles.mainText}>
          <Text>Lets Find Some</Text>
          <Text style={styles.boldText}> Professional Home Services</Text>
          <Text> On Your Door Step</Text>
        </Text>
        <Text style={styles.descriptionText}>
          Best app near you that delivers best customer service
        </Text>
        <TouchableOpacity
          onPress={() => console.log("Button Clicked")}
          style={styles.btn}
        >
          <Text style={{ textAlign: "center", color: color.primary }}>
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  loginImage: {
    width: 270,
    height: 530,
    marginTop: 100,
    borderWidth: 2,
    borderColor: color.black,
    borderRadius: 15,
  },
  subContainer: {
    width: width,
    backgroundColor: color.primary,
    minHeight: 400,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: "center",
    justifyContent: "start",
  },
  mainText: {
    fontSize: 27,
    color: color.white,
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  descriptionText: {
    color: color.white,
    marginTop: 10,
    textAlign: "center",
  },
  btn: {
    padding: 20,
    backgroundColor: color.white,
    borderRadius: 50,
    marginTop: 50,
  },
});
