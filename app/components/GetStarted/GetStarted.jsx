import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../../assets/images/a.png")}
        />
        <Text style={styles.title}>Welcome to RNB Soul Radio!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            <Link href="/home">Get Started</Link>
          </Text>
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
    backgroundColor: "#841584",
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
});

export default GetStarted;
