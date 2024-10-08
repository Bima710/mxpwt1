import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FileItemProps {
  name: string;
}

const FileItem: React.FC<FileItemProps> = ({ name }) => {
  return (
    <View style={styles.item}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FileItem;
