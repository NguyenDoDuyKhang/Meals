// CategoriesScreen.tsx
import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './ThemeContext'; // Đảm bảo đường dẫn đúng

const CATEGORIES = [
  { id: '1', title: 'Italian', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDDq1iLXfXoLfgkVm6CJRNCgfHp--MyLbEg&s' },
  { id: '2', title: 'Quick & Easy', imageUrl: 'https://www.thelazydish.com/wp-content/uploads/2022/03/quick-and-easy-dinner-ideas-fast-to-make-last-minute.jpg' },
  { id: '3', title: 'Hamburgers', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENYnRh013tE7LrJCY-j0pTDFoJzJZtAx8qw&s' },
  { id: '4', title: 'German', imageUrl: 'https://admin.expatica.com/de/wp-content/uploads/sites/6/2023/11/bratwurst-sauerkraut.jpg' },
  { id: '5', title: 'Light & Lovely', imageUrl: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/Pumpkin-Soup_5216.jpg' },
  { id: '6', title: 'Exotic', imageUrl: 'https://www.vietnamonline.com/media/uploads/froala_editor/images/Scallop.jpg' },
];

const CategoriesScreen: React.FC = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();

  const renderCategoryItem = (itemData: { item: { id: string; title: string; imageUrl: string } }) => {
    return (
      <TouchableOpacity
        style={[styles.gridItem, isDarkMode ? styles.darkGridItem : styles.lightGridItem]}
        onPress={() => navigation.navigate('Meals', { categoryId: itemData.item.id })}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: itemData.item.imageUrl }} style={styles.image} />
          <View style={[styles.titleContainer, isDarkMode ? styles.darkTitleContainer : styles.lightTitleContainer]}>
            <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>{itemData.item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      numColumns={2}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  lightGridItem: {
    backgroundColor: '#f5f5f5',
  },
  darkGridItem: {
    backgroundColor: '#333333',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  titleContainer: {
    padding: 10,
  },
  lightTitleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  darkTitleContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  lightTitle: {
    color: 'white',
  },
  darkTitle: {
    color: 'red',
  },
});

export default CategoriesScreen;
