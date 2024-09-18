import React, { createContext, useState, ReactNode } from 'react';

type FavoritesContextType = {
  favorites: string[];
  addFavorite: (mealId: string) => void;
  removeFavorite: (mealId: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = (mealId: string) => {
    setFavorites((currentFavorites) => [...currentFavorites, mealId]);
  };

  const removeFavorite = (mealId: string) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((id) => id !== mealId)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
