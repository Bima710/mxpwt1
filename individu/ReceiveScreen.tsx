import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import { Props } from './types';

const ReceiveScreen: React.FC<Props> = ({ navigation }) => {
  const qrValue = "Zapya Go - Receive";
  const receiverName = "John Doe";
  const password = "1234";

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Receive" />
      </Appbar.Header>
      <Text style={styles.title}>Scan to Receive</Text>
      <QRCode value={qrValue} size={200} />
      <Text style={styles.info}>Receiver: {receiverName}</Text>
      <Text style={styles.info}>Password: {password}</Text>
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
  info: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ReceiveScreen;
