import Presets from "./Presets";
import Topics from "./Topics";
import { useState } from "react";
import	{	View,	Text,	TouchableOpacity	}	from	"react-native";

const Filters = () => {
  const [currentTab, setCurrentTab] = useState("Presets");

  const handleTabPress = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <View style={{ flex: 1 }}>
      {currentTab === "Presets" && <Presets />}
      {currentTab === "Topics" && <Topics />}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => handleTabPress("Presets")}
        >
          <Text style={{ color: currentTab === "Presets" ? "blue" : "gray" }}>
            Presets
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => handleTabPress("Topics")}
        >
          <Text style={{ color: currentTab === "Filters" ? "blue" : "gray" }}>
            Filters
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filters;