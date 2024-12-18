import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GetStarted from "./components/GetStarted/GetStarted";

export default function Index() {
  return (
    <SafeAreaView>
      <GetStarted />
    </SafeAreaView>
  );
}
