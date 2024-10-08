import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handlePress = (route: string) => {
    console.log(`Navigating to ${route}`);
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Zapya Go" />
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      </Appbar.Header>
      <View style={styles.main}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => handlePress('Send')}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>➡️</Text>
            </View>
            <Text style={styles.iconLabel}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('Receive')}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>⬅️</Text>
            </View>
            <Text style={styles.iconLabel}>Receive</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionItem} onPress={() => handlePress('History')}>
            <Text style={styles.sectionIcon}>📜</Text>
            <Text style={styles.sectionLabel}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem} onPress={() => handlePress('LocalFile')}>
            <Text style={styles.sectionIcon}>📁</Text>
            <Text style={styles.sectionLabel}>Local File</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38b2ac',
  },
  header: {
    backgroundColor: '#38b2ac',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  iconCircle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 20,
  },
  iconText: {
    fontSize: 50,
    color: '#38b2ac',
  },
  iconLabel: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#319795',
    padding: 20,
    marginTop: 20,
  },
  sectionItem: {
    alignItems: 'center',
  },
  sectionIcon: {
    color: '#fff',
    fontSize: 30,
  },
  sectionLabel: {
    color: '#fff',
    marginTop: 5,
  },
});

export default HomeScreen;
