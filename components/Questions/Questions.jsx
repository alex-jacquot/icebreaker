import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Fix import
import useQuestionManager from "../../hooks/useQuestionManager";
import { router } from "expo-router";

const Questions = () => {
  const [question, setQuestion] = useState({
    question: "Press Next to get a random question!",
    tags: [],
  });

  const { questions, getRandomQuestion } = useQuestionManager();

  const handleNextQuestion = () => {
    const randomQuestion = getRandomQuestion();
    setQuestion(randomQuestion);
  };

  return (
    <View
      className={`h-full bg-gray-800 dark:bg-gray-100 px-8 py-12 flex flex-col justify-between`}
    >
      {/* Top Bar */}
      <View className="flex flex-row justify-between">
        <TouchableOpacity
          className="items-start"
          onPress={() => router.push("/filters")}
        >
          <FontAwesome name="filter" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          className="items-end"
          onPress={() => router.push("/settings")}
        >
          <FontAwesome name="cog" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Main Question */}
      <View className="mt-16">
        <Text className="text-3xl font-bold text-white dark:text-gray-800 text-center">
          {question.question}
        </Text>
      </View>

      {/* Tags */}
      <View className="flex flex-row flex-wrap mt-4">
        {question.tags.map((tag, index) => (
          <View
            key={index}
            className={`bg-blue-500 text-white rounded px-4 py-2 mr-4 mt-2`}
            style={{ backgroundColor: getColorForTag(tag) }}
          >
            <Text>{tag}</Text>
          </View>
        ))}
      </View>

      {/* Description Text */}
      <View className="mt-16">
        <Button
          title="Next question"
          onPress={handleNextQuestion}
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

const getColorForTag = (tag) => {
  switch (tag.toLowerCase()) {
    case "life":
      return "#4299E1"; // Blue
    case "technology":
      return "#48BB78"; // Green
    case "relationships":
      return "#9F7AEA"; // Purple
    case "career":
      return "#ED8936"; // Orange
    default:
      return "#718096"; // Gray
  }
};

export default Questions;
