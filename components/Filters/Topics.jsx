import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";

const Presets = () => {
  const [selectedTags, setSelectedTags] = useState([]); // Array to store selected tags
  const [searchText, setSearchText] = useState(""); // State for search text

  const sampleData = [
    { name: "Productivity", count: 42 },
    { name: "Relationships", count: 78 },
    { name: "Travel", count: 15 },
    { name: "Health & Wellness", count: 93 },
    { name: "Career Advice", count: 21 },
    { name: "Entertainment", count: 60 },
    { name: "Finance", count: 37 },
    { name: "Creativity", count: 55 },
    { name: "Artificial Intelligence", count: 89 },
    { name: "Climate Change", count: 12 },
  ];

  // Sort the sample data by count (descending)
  const sortedData = sampleData.sort((a, b) => b.count - a.count);

  const handleTagPress = (tagName) => {
    const newSelectedTags = [...selectedTags]; // Copy the current selectedTags array
    if (selectedTags.includes(tagName)) {
      const index = newSelectedTags.indexOf(tagName);
      newSelectedTags.splice(index, 1);
    } else {
      newSelectedTags.push(tagName);
    }
    setSelectedTags(newSelectedTags);
  };

  return (
    <View className="flex-1 mt-10">
      <View className="flex flex-row justify-between items-center px-4 py-2">
        <Text>Explore 459 questions and 56 distinct topics</Text>

        <TouchableOpacity
          onPress={() => {
            /* Handle search button press */
          }}
        >
          {/* Optional button content */}
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center px-4 py-2">
        <Ionicons name="search" size={24} color="gray" />
        <TextInput
          className="rounded-full flex-1 bg-gray-200 px-4 py-2" // Set width to flex-1
          placeholder="Search for specific topics..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>

      <View className="flex-1 justify-center items-center">
        {sortedData.map((tag, index) => (
          <TouchableOpacity
            key={tag.name} // Key prop for each tag
            className={`flex-row align-items p-2 rounded-full mr-2 mb-2 ${
              selectedTags.includes(tag.name) ? "bg-blue-500" : "bg-gray-300"
            }`}
            onPress={() => handleTagPress(tag.name)}
          >
            <FontAwesome
              name="tag"
              size={24}
              color={selectedTags.includes(tag.name) ? "white" : "gray"}
            />
            <Text
              className={`ml-2 ${
                selectedTags.includes(tag.name) ? "text-white" : "text-gray-700"
              }`}
            >
              {tag.name}
            </Text>
            <Text className="ml-2 text-gray-500">({tag.count})</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Presets;
