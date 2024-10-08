import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';

const SearchScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Search" />
      </Appbar.Header>
      <View style={styles.iconRow}>
        <Text style={styles.icon}><i className="fas fa-th-large"></i></Text>
        <Text style={styles.icon}><i className="fas fa-image"></i></Text>
        <Text style={styles.icon}><i className="fas fa-video"></i></Text>
        <Text style={styles.icon}><i className="fas fa-music"></i></Text>
        <Text style={[styles.icon, styles.activeIcon]}><i className="fas fa-search"></i></Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Text style={styles.searchIcon}><i className="fas fa-search"></i></Text>
      </View>
      <View style={styles.searchResults}>
        {/* Placeholder for search results */}
        <Text style={styles.noResults}>No search results found.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#14b8a6',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f3f3f3',
    paddingVertical: 10,
  },
  icon: {
    fontSize: 24,
    color: '#888',
  },
  activeIcon: {
    color: '#14b8a6',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
  },
  searchIcon: {
    marginLeft: 10,
    fontSize: 24,
    color: '#888',
  },
  searchResults: {
    padding: 20,
  },
  noResults: {
    textAlign: 'center',
    color: '#888',
  },
});

export default SearchScreen;
