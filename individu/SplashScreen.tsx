import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main'); // Ensure it navigates to the main stack
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Zapya Go</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', // Ensuring a visible background color
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
