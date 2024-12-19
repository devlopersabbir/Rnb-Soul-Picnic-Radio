import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
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
  const [refreshing, setRefreshing] = useState(false);

  // Define card data with titles, URLs, and icons
  const cards = [
    {
      id: 1,
      title: "LISTEN LIVE",
      url: "https://station.voscast.com/641f03d686712/",
      icon: "headphones",
    },
    {
      id: 2,
      title: "OUR TOURING FESTIVALS",
      url: "https://www.rnbsoulpicnic.com/",
      icon: "youtube",
    },
    {
      id: 3,
      title: "DJ FOR RNB SOUL PICNIC RADIO (DJs, Talk shows, Bloggers, Hosts)",
      url: "https://www.github.com",
      icon: "github",
    },
    {
      id: 4,
      title: "ADVERTISE WITH US",
      url: "https://reactnative.dev",
      icon: "mobile",
    },
    { id: 5, title: "CONTACT US", url: "https://reactjs.org", icon: "code" },
  ];

  // Function to handle refresh
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
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
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#38BF64" />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
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
            {cards.map((card, index) => (
              <View key={card.id} style={styles.cardWrapper}>
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => handleCardPress(card.url)}
                >
                  <Icon
                    name={card.icon}
                    size={60}
                    color="#FFFFFF"
                    style={styles.icon}
                  />
                  <Text style={styles.cardText}>{card.title}</Text>
                </TouchableOpacity>
                {(index + 1) % 2 === 0 && <View style={styles.cardSpacer} />}{" "}
                {/* Spacer after every pair */}
              </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1, // Allows ScrollView to grow and center its content
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20%", // Optional padding for better spacing at the bottom
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "100%", // Ensures no overflow in horizontal direction
  },
  cardWrapper: {
    width: "48%",
    marginBottom: "4%",
    display: "flex",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#38BF64",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    height: 150,
    justifyContent: "center",
  },
  icon: {
    // marginRight: 10, // Space between icon and text
  },
  cardText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: "20%", // Adjust this margin as needed
    borderRadius: 5,
    alignSelf: "center",
  },
});

export default Home;
