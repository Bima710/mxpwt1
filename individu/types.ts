import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
  Home: undefined;
  Search: undefined;
  Send: undefined;
  Receive: undefined;
  History: undefined;
  LocalFile: undefined;
  ScanQRCode: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};
