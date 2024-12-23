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
  const [refreshing, setRefreshing] = useState(false);

  // Card Data
  const cards = [
    {
      id: 1,
      title: "LISTEN LIVE",
      url: "https://station.voscast.com/641f03d686712/",
      icon: require("../../assets/images/headphones.png"),
    },
    {
      id: 2,
      title: "OUR TOURING FESTIVALS",
      url: "https://www.rnbsoulpicnic.com/",
      icon: require("../../assets/images/festival.png"),
    },
    {
      id: 3,
      title: "DJ FOR RNB SOUL PICNIC RADIO (DJs, Hosts)",
      url: "https://form.jotform.com/243536620521147",
      icon: require("../../assets/images/dj.png"),
    },
    {
      id: 4,
      title: "ADVERTISE WITH US",
      url: "ais@yorkpromotions.com",
      icon: require("../../assets/images/advertise.png"),
    },
    {
      id: 5,
      title: "CONTACT US",
      url: "ais@yorkpromotions.com",
      icon: require("../../assets/images/contact.png"),
    },
  ];

  // Handle refresh
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  // Handle card press
  const handleCardPress = (url) => {
    if (url.includes("@")) {
      Linking.openURL(`mailto:${url}`).catch((err) =>
        console.error("Failed to open email client:", err)
      );
    } else {
      Linking.openURL(url).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    }
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
          <TouchableOpacity>
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
                  <Image
                    source={card.icon}
                    style={styles.icon}
                    resizeMode="cover"
                  />
                  <Text style={styles.cardText}>{card.title}</Text>
                </TouchableOpacity>
                {(index + 1) % 2 === 0 && <View style={styles.cardSpacer} />}
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
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20%",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "100%",
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
    height: 160,
    justifyContent: "center",
  },
  icon: {
    width: 80,
    height: 80,
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
    marginBottom: 30,
    borderRadius: 5,
    alignSelf: "center",
  },
});

export default Home;
