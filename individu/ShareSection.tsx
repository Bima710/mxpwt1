import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ShareSection: React.FC = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Sharing Section</Text>
      <Button title="Share File" onPress={() => alert('Share file')} />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ShareSection;
