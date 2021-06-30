import { useState, useEffect } from "react";

export const useMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rawMeals, setRawMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      setIsLoading(true);
      const respose = await fetch("/meals");
      const rawMealsResponse = await respose.json();
      setRawMeals(rawMealsResponse);
      setIsLoading(false);
    };

    loadMeals();
  }, []);

  return {
    isLoading,
    meals: rawMeals.map((rawMeal) => ({
      ...rawMeal,
      plannedDate: new Date(rawMeal.plannedDate),
    })),
    setMeals: setRawMeals,
  };
};
