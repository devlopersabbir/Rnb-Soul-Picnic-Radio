import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const GetStarted = () => {
  // // Function to handle
  // const handleCardPress = (url) => {
  //   <Link to={url} />;
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../../assets/images/rnb_soul.png")}
        />

        <Text style={styles.title}>Welcome to RNB Soul Radio!</Text>

        <TouchableOpacity
          style={styles.button}
          // onPress={() => handleCardPress("/home")}
        >
          <Text style={styles.buttonText}>LETS GO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 500,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Poppins",
    textAlign: "center",
    marginTop: 20,
    color: "black",
  },
  button: {
    marginTop: 40,
    backgroundColor: "#38BF64",
    borderRadius: 8,
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#FFFFFF",
    textAlign: "center",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default GetStarted;
