import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Appbar, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Placeholder data for installed apps (replace with actual data if available)
const installedApps = [
  { id: '1', name: 'WhatsApp' },
  { id: '2', name: 'Instagram' },
  { id: '3', name: 'Facebook' },
];

const SendScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const categories = ['App', 'Photo', 'Video', 'Audio', 'Search'];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === 'App') {
      setItems(installedApps.map(app => app.name));
    } else {
      setItems([]);
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Send" />
      </Appbar.Header>
      <Text style={styles.title}>Select Category</Text>
      <View style={styles.chipsContainer}>
        {categories.map(category => (
          <Chip
            key={category}
            selected={selectedCategory === category}
            onPress={() => handleCategorySelect(category)}
            style={styles.chip}
          >
            {category}
          </Chip>
        ))}
      </View>
      {selectedCategory && (
        <View style={styles.listContainer}>
          <Text style={styles.subtitle}>Select Item to Share</Text>
          <FlatList
            data={items}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
          <Button
            title="Send"
            onPress={() => navigation.navigate('ScanQRCode')}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  appbar: {
    backgroundColor: 'black', // Full black bar background
  },
  title: {
    fontSize: 24,
    margin: 20,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  chip: {
    margin: 5,
  },
  listContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SendScreen;
