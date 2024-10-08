import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';

const LocalFileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Local File" />
      </Appbar.Header>
      <View style={styles.iconRow}>
        <Text style={styles.icon}><i className="fas fa-th-large"></i></Text>
        <Text style={styles.icon}><i className="fas fa-image"></i></Text>
        <Text style={styles.icon}><i className="fas fa-video"></i></Text>
        <Text style={styles.icon}><i className="fas fa-music"></i></Text>
        <Text style={[styles.icon, styles.activeIcon]}><i className="fas fa-folder"></i></Text>
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
      <ScrollView>
        <View style={styles.fileInfo}>
          <View style={styles.fileItem}>
            <Text style={styles.fileIcon}><i className="fas fa-folder"></i></Text>
            <View style={styles.fileDetails}>
              <Text style={styles.fileText}>All Files</Text>
              <Text style={styles.fileSize}>Available 82.12GB / 168GB</Text>
            </View>
          </View>
          <View style={styles.fileItem}>
            <Text style={styles.fileIcon}><i className="fas fa-file-alt"></i></Text>
            <View style={styles.fileDetails}>
              <Text style={styles.fileText}>Document</Text>
              <Text style={styles.fileSize}>0</Text>
            </View>
          </View>
          <View style={styles.fileItem}>
            <Text style={styles.fileIcon}><i className="fas fa-file"></i></Text>
            <View style={styles.fileDetails}>
              <Text style={styles.fileText}>Large Files</Text>
              <Text style={styles.fileSize}>64</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  fileInfo: {
    padding: 20,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  fileIcon: {
    fontSize: 30,
    color: '#14b8a6',
    marginRight: 10,
  },
  fileDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  fileText: {
    fontSize: 16,
    color: '#333',
  },
  fileSize: {
    color: '#888',
    fontSize: 14,
  },
});

export default LocalFileScreen;
