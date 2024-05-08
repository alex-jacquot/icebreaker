import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
const images = require("../../assets/logo.jpg");
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

import { Button } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images}
            style={{ width: 390, height: 252, borderRadius: 10 }}
            resizeMode="contain"
            className="m-20 rounded"
          />



          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Icebreaker
            </Text>
          </View>

          <Text className="text-lg font-pregular text-gray-100 mt-7 mb-7 text-center">
            Ask the right questions to get the right answers
          </Text>

          <Button
            title="Get started"
            onPress={() => router.push("/questions")} // Use navigation API
            style={{ backgroundColor: "transparent", color: "white" }}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
