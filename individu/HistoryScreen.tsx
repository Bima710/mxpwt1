import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Appbar } from 'react-native-paper';

const historyItems = [
  { id: '1', name: 'PXL_20240928_163651270.mp4', date: '2024-09-28', recipient: 'GamePast', size: '13GB' },
  { id: '2', name: '0908241421.mp4', date: '2024-09-12', recipient: 'GamePast', size: '31MB' },
];

const HistoryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="History" />
      </Appbar.Header>
      <View style={styles.content}>
        <FlatList
          data={historyItems}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <View style={styles.historyItemHeader}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.recipient}>Sent to: {item.recipient}</Text>
              </View>
              <View style={styles.historyItemContent}>
                <Image source={{ uri: 'https://placehold.co/50x50' }} style={styles.thumbnail} />
                <View>
                  <Text style={styles.fileName}>{item.name}</Text>
                  <Text style={styles.status}>Transfer complete</Text>
                  <Text style={styles.size}>{item.size}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  header: {
    backgroundColor: '#14b8a6',
  },
  content: {
    padding: 10,
  },
  historyItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  historyItemHeader: {
    marginBottom: 10,
  },
  date: {
    color: '#14b8a6',
  },
  recipient: {
    color: '#14b8a6',
    fontWeight: 'bold',
  },
  historyItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  fileName: {
    color: '#333',
  },
  status: {
    color: '#14b8a6',
  },
  size: {
    color: '#888',
  },
});

export default HistoryScreen;
