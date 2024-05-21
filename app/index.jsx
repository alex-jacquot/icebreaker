import React from "react";
import Home from "../components/Home/Home";
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';

const App = () => {
  const [loaded] = useFonts({
    ...FontAwesome5.font,
  });

  return <Home />;
};

export default App;
