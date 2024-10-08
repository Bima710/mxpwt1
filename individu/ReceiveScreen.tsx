import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import { Props } from './types';

const ReceiveScreen: React.FC<Props> = ({ navigation }) => {
  const qrValue = "Zapya Go - Receive";
  const receiverName = "LM-V450";
  const password = "12345678";

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Receive File" />
      </Appbar.Header>
      <View style={styles.content}>
        <Text style={styles.status}>Awaiting sender</Text>
        <View style={styles.speedMode}>
          <Text style={styles.boltIcon}>⚡</Text>
          <Text style={styles.speedText}>Support High Speed mode</Text>
        </View>
        <View style={styles.qrContainer}>
          <QRCode value={qrValue} size={200} />
        </View>
        <View style={styles.info}>
          <Text>• Ask sender to scan QR code or connect to</Text>
          <Text>• Receiver: {receiverName}</Text>
          <Text>• Password: <Text style={styles.password}>{password}</Text></Text>
        </View>
        <View style={styles.restoreContainer}>
          <Text style={styles.restoreText}>Restore to 2.4G Compatibility mode</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14b8a6',
  },
  header: {
    backgroundColor: '#14b8a6',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  status: {
    color: '#14b8a6',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  speedMode: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#ff0000',
    marginBottom: 20,
  },
  boltIcon: {
    color: '#ff0000',
    marginRight: 5,
    fontSize: 20,
  },
  speedText: {
    color: '#ff0000',
  },
  qrContainer: {
    marginBottom: 20,
  },
  info: {
    color: '#14b8a6',
    marginBottom: 20,
    textAlign: 'center',
  },
  password: {
    color: '#00cc00',
  },
  restoreContainer: {
    textAlign: 'center',
  },
  restoreText: {
    color: '#14b8a6',
    textDecorationLine: 'underline',
  },
});

export default ReceiveScreen;
