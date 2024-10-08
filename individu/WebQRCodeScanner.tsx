import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import QrScanner from 'react-qr-scanner';

const WebQRCodeScanner: React.FC<{ navigation: any }> = ({ navigation }) => {
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  const handleScan = (data: { text: string } | null) => {
    if (data) {
      console.log(`QR code data: ${data.text}`);
      alert(`QR code data: ${data.text}`);
      // Add your logic here to handle the scanned data
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Send')} />
        <Appbar.Content title="Scan QR Code" />
      </Appbar.Header>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WebQRCodeScanner;
