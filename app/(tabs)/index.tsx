import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';
import { FavoritesProvider } from './screens/FavoritesContext';
import { ThemeProvider, useTheme } from './screens/ThemeContext'; // Import ThemeProvider

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Meals" component={MealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  const { isDarkMode } = useTheme();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Favorites':
              iconName = 'heart';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
            default:
              iconName = 'information-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: isDarkMode ? 'white' : 'black',
        tabBarInactiveTintColor: isDarkMode ? 'grey' : 'grey',
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#333333' : '#ffffff',
        },
        headerStyle: {
          backgroundColor: isDarkMode ? '#333333' : '#ffffff',
        },
        headerTintColor: isDarkMode ? 'white' : 'black',
      })}
    >
      <Tabs.Screen name="Home" component={MealsNavigator} options={{ title: 'Home' }} />
      <Tabs.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favorites' }} />
      <Tabs.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProvider> {/* Đặt ThemeProvider bao bọc toàn bộ ứng dụng */}
      <FavoritesProvider>
        <NavigationContainer independent={true}>
          <TabNavigator />
        </NavigationContainer>
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default App;
