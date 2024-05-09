import React from "react";
import { View, Text, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Fix import
import { TouchableOpacity } from "react-native";
import useQuestionManager from "../../hooks/useQuestionManager";
import { useState } from "react";
import { router } from "expo-router";
const Questions = () => {
  const [question, setQuestion] = useState(
    "What's your burning question today?"
  );
  const { questions, getRandomQuestion } = useQuestionManager();

  return (
    <View
      className={`h-full bg-gray-800 dark:bg-gray-100 px-8 py-12 flex flex-col justify-between`}
    >
      {/* Top Bar */}
      <View className="flex flex-row">
        <TouchableOpacity
          className="items-start"
          onPress={() => router.push("/filters")}
        >
          <FontAwesome
            name="filter"
            size={24}
            color="gray-500 dark:text-gray-800"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="items-end"
          onPress={() => router.push("/settings")}
        >
          <FontAwesome
            name="cog"
            size={24}
            color="gray-500 dark:text-gray-800"
          />
        </TouchableOpacity>
      </View>

      {/* Main Question */}
      <View className="mt-16">
        <Text className="text-3xl font-bold text-white dark:text-gray-800 text-center">
          {question}
        </Text>
      </View>

      {/* Tags */}
      <View className="flex flex-row max-w-full">
        {/* Your elements go here */}
        <View className="bg-blue-500 text-white rounded px-4 py-2 mr-4 mt-2">
          <Text>Life</Text>
        </View>
        <View className="bg-green-500 text-white rounded px-4 py-2 mr-4 mt-2">
          <Text>Technology</Text>
        </View>
        <View className="bg-purple-500 text-white rounded px-4 py-2 mr-4 mt-2">
          <Text>Relationships</Text>
        </View>
        <View className="bg-orange-500 text-white rounded px-4 py-2 mr-4 mt-2">
          <Text>Career</Text>
        </View>
      </View>

      {/* Description Text */}
      <View className="mt-16">
        <Button
          title="Next question"
          onPress={() => setQuestion(getRandomQuestion().question)} // Use navigation API
          style={{ backgroundColor: "transparent", color: "white" }}
        />
      </View>
      <View className="mt-16">
        <Text className="text-center text-gray-400 dark:text-gray-200">
          Explore a variety of topics and get inspired by interesting questions
          from others.
        </Text>
      </View>
    </View>
  );
};

export default Questions;
