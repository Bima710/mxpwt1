import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Appbar, Chip } from 'react-native-paper';
import { Props } from './types';

// Placeholder data for local files
const localFiles = [
  { id: '1', name: 'photo1.jpg' },
  { id: '2', name: 'document.pdf' },
  { id: '3', name: 'music.mp3' },
];

const LocalFileScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const categories = ['App', 'Photo', 'Video', 'Audio', 'Search'];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // For LocalFile screen, we're just using the placeholder data
    setItems(localFiles.map(file => file.name));
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Local File" />
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

export default LocalFileScreen;
