import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { Drawer, Text } from 'react-native-paper';

const SideBarContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <Drawer.Section>
          <DrawerItem label="Home" onPress={() => props.navigation.navigate('Home')} />
          <DrawerItem label="Search" onPress={() => props.navigation.navigate('Search')} />
          <DrawerItem label="Send" onPress={() => props.navigation.navigate('Send')} />
          <DrawerItem label="Receive" onPress={() => props.navigation.navigate('Receive')} />
          <DrawerItem label="History" onPress={() => props.navigation.navigate('History')} />
          <DrawerItem label="Local File" onPress={() => props.navigation.navigate('LocalFile')} />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});

export default SideBarContent;
