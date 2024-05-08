import { useEffect, useState } from "react";
import questionsData from "../data/questions.json";

interface Question {
  category: number;
  tags: string[];
  question: string;
}

interface Category {
  id: number;
  name: string;
}

export const useQuestionManager = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] =
    useState<Question[]>(questions);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  return { questions, getRandomQuestion };
};

export default useQuestionManager;
