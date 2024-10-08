import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const apps = [
  { name: "1.1.1.1", icon: "https://placehold.co/100x100?text=1.1.1.1" },
  { name: "AdAway", icon: "https://placehold.co/100x100?text=AdAway" },
  { name: "Al-Azan", icon: "https://placehold.co/100x100?text=Al-Azan" },
  { name: "Android Acc...", icon: "https://placehold.co/100x100?text=Android+Acc..." },
  { name: "Android Auto", icon: "https://placehold.co/100x100?text=Android+Auto" },
  { name: "Android Sys...", icon: "https://placehold.co/100x100?text=Android+Sys..." },
  { name: "Authenticator", icon: "https://placehold.co/100x100?text=Authenticator" },
  { name: "Authy", icon: "https://placehold.co/100x100?text=Authy" },
];

const SendScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Select files to send" />
      </Appbar.Header>
      <View style={styles.iconRow}>
        <View style={styles.iconColumn}>
          <Text style={styles.icon}><i className="fas fa-th-large"></i></Text>
          <Text style={styles.iconText}>App</Text>
        </View>
        <View style={styles.iconColumn}>
          <Text style={styles.icon}><i className="fas fa-image"></i></Text>
          <Text style={styles.iconText}>Photo</Text>
        </View>
        <View style={styles.iconColumn}>
          <Text style={styles.icon}><i className="fas fa-video"></i></Text>
          <Text style={styles.iconText}>Video</Text>
        </View>
        <View style={styles.iconColumn}>
          <Text style={styles.icon}><i className="fas fa-music"></i></Text>
          <Text style={styles.iconText}>Audio</Text>
        </View>
        <View style={styles.iconColumn}>
          <Text style={styles.icon}><i className="fas fa-search"></i></Text>
          <Text style={styles.iconText}>Search</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Local App(99)</Text>
        <FlatList
          data={apps}
          renderItem={({ item }) => (
            <View style={styles.appItem}>
              <Image source={{ uri: item.icon }} style={styles.appIcon} />
              <Text style={styles.appName}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
          numColumns={4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#14b8a6',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f3f3f3',
    paddingVertical: 10,
  },
  iconColumn: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    color: '#888',
  },
  iconText: {
    fontSize: 12,
    color: '#888',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  appItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  appIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  appName: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    color: '#333',
  },
});

export default SendScreen;
