import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const UploadButton: React.FC = () => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Upload File" onPress={() => alert('Upload file')} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
  },
});

export default UploadButton;
