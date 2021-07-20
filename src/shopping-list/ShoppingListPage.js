import React from 'react'
import { BackButton } from '../ui'
import { useShoppingList } from './useShoppingList'

export const ShoppingListPage = () => {
    const { isLoading, items } = useShoppingList()
    return (
        <div className="page">
            <BackButton />
            <div className="centered-container">
                <h1>Shopping List:</h1>
                {isLoading ?
                    <p>Loading...</p>
                    : items.map(itm => (
                        <p key={itm}>{itm}</p>
                    ))}
            </div>
        </div>
    )
}