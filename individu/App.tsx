import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import SendScreen from './SendScreen';
import ReceiveScreen from './ReceiveScreen';
import HistoryScreen from './HistoryScreen';
import LocalFileScreen from './LocalFileScreen';
import ScanQRCodeScreen from './ScanQRCodeScreen';
import SideBarContent from './SideBarContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

console.log('App.tsx file is loaded'); // Log to verify file is loaded

const App: React.FC = () => {
  console.log('App component is rendered'); // Log to verify App component is rendered

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainDrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const MainDrawerNavigator: React.FC = () => {
  console.log('MainDrawerNavigator component is rendered'); // Log to verify MainDrawerNavigator component is rendered

  return (
    <Drawer.Navigator drawerContent={(props) => <SideBarContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} />
      <Drawer.Screen name="Send" component={SendScreen} />
      <Drawer.Screen name="Receive" component={ReceiveScreen} />
      <Drawer.Screen name="History" component={HistoryScreen} />
      <Drawer.Screen name="LocalFile" component={LocalFileScreen} />
      <Drawer.Screen name="ScanQRCode" component={ScanQRCodeScreen} />
    </Drawer.Navigator>
  );
};

export default App;
