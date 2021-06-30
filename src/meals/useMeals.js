import { useState, useEffect } from "react";

export const useMeals = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const loadMeals = async () => {
            setIsLoading(true)
            const respose = await fetch('/meals')
            const meals = await respose.json()
            setMeals(meals)
            setIsLoading(false)
        }

        loadMeals()
    }, [])

    return { isLoading, meals, setMeals }
}