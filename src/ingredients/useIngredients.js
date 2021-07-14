import { useState, useEffect } from "react";
export const useIngredients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const loadIngredients = async () => {
      const response = await fetch("/ingredients");
      const ingredientsRes = await response.json();
      setIngredients(ingredientsRes);
      setIsLoading(false);
    };
    loadIngredients();
  }, []);

  return { isLoading, ingredients, setIngredients };
};
