// types.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Categories: undefined;
  Meals: undefined;
  MealDetail: { mealId: string };
  Favorites: undefined;
  Settings: undefined;
};

export type MealDetailScreenProp = StackNavigationProp<RootStackParamList, 'MealDetail'>;
