import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Appbar, List } from 'react-native-paper';

// Sample data for history items
const historyItems = [
  { id: '1', name: 'photo1.jpg', date: '2024-10-01' },
  { id: '2', name: 'document.pdf', date: '2024-10-02' },
  { id: '3', name: 'music.mp3', date: '2024-10-03' },
];

const HistoryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="History" />
      </Appbar.Header>
      <Text style={styles.title}>Received Items</Text>
      <FlatList
        data={historyItems}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            description={`Received on ${item.date}`}
            left={props => <List.Icon {...props} icon="file" />}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    margin: 20,
    textAlign: 'center',
  },
  list: {
    marginHorizontal: 20,
  },
});

export default HistoryScreen;
