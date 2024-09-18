// SettingsScreen.tsx
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const SettingsScreen: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  // Define theme styles
  const themeStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.screen, themeStyles.screen]}>
      <Text style={[styles.title, themeStyles.title]}>Settings</Text>
      
      <View style={[styles.settingItem, themeStyles.settingItem]}>
        <Text style={themeStyles.settingText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          accessibilityLabel="Dark Mode"
          accessibilityHint="Toggle to switch between light and dark mode"
        />
      </View>
    </View>
  );
};

const lightTheme = StyleSheet.create({
  screen: {
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#000000',
  },
  settingItem: {
    borderBottomColor: '#ccc',
  },
  settingText: {
    color: '#000000',
  },
});

const darkTheme = StyleSheet.create({
  screen: {
    backgroundColor: '#000000',
  },
  title: {
    color: '#ffffff',
  },
  settingItem: {
    borderBottomColor: '#444',
  },
  settingText: {
    color: '#ffffff',
  },
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
});

export default SettingsScreen;
