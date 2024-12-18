import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false); // State to handle refresh

  // Define card data with titles and URLs
  const cards = [
    { id: 1, title: "Google", url: "https://www.google.com" },
    { id: 2, title: "YouTube", url: "https://www.youtube.com" },
    { id: 3, title: "GitHub", url: "https://www.github.com" },
    { id: 4, title: "React Native", url: "https://reactnative.dev" },
    { id: 5, title: "React", url: "https://reactjs.org" },
  ];

  // Function to handle refresh
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false); // Simulate refresh completion after 2 seconds
    }, 2000);
  };

  // Function to handle card press
  const handleCardPress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  // Function to handle image press
  const handleImagePress = () => {
    Linking.openURL("https://www.example.com").catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {refreshing ? (
        // Show ActivityIndicator while refreshing
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#841584" />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.cardsContainer}>
            {cards.map((card) => (
              <TouchableOpacity
                key={card.id}
                style={styles.card}
                onPress={() => handleCardPress(card.url)}
              >
                <Text style={styles.cardText}>{card.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  cardsContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#841584",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  cardText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default Home;
