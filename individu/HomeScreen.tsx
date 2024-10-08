import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Appbar } from 'react-native-paper';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handlePress = (route: string) => {
    console.log(`Navigating to ${route}`);
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Zapya Go" />
      </Appbar.Header>
      <Text style={styles.title}>Welcome to Zapya Go!</Text>
      <Button title="Send" onPress={() => handlePress('Send')} />
      <Button title="Receive" onPress={() => handlePress('Receive')} />
      <Button title="History" onPress={() => handlePress('History')} />
      <Button title="Local File" onPress={() => handlePress('LocalFile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    backgroundColor: 'black', // Full black bar background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
});

export default HomeScreen;
