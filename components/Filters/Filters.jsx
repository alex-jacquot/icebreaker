import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Filters = () => {
  const navigation = useNavigation();
  const [tag1Enabled, setTag1Enabled] = useState(false);
  const [tag2Enabled, setTag2Enabled] = useState(false);

  const handleTag1Toggle = () => {
    setTag1Enabled(!tag1Enabled);
  };

  const handleTag2Toggle = () => {
    setTag2Enabled(!tag2Enabled);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        className={`flex-row items-center p-2 rounded-full ${
          tag1Enabled ? "bg-blue-500" : "bg-gray-300"
        }`}
        onPress={handleTag1Toggle}
      >
        <Ionicons
          name="ios-checkmark-circle"
          size={24}
          color={tag1Enabled ? "white" : "gray"}
        />
        <Text
          className={`ml-2 ${tag1Enabled ? "text-white" : "text-gray-700"}`}
        >
          Tag 1
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className={`flex-row items-center mt-4 p-2 rounded-full ${
          tag2Enabled ? "bg-blue-500" : "bg-gray-300"
        }`}
        onPress={handleTag2Toggle}
      >
        <Ionicons
          name="ios-checkmark-circle"
          size={24}
          color={tag2Enabled ? "white" : "gray"}
        />
        <Text
          className={`ml-2 ${tag2Enabled ? "text-white" : "text-gray-700"}`}
        >
          Tag 2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filters;
