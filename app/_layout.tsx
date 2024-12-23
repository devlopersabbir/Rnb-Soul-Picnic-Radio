import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="home"
        options={{
          headerShown: true,
          title: "RNB Soul Radio",
          headerStyle: { backgroundColor: "#38BF64" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontFamily: "Poppins-Bold" },
        }}
      />
    </Stack>
  );
}
