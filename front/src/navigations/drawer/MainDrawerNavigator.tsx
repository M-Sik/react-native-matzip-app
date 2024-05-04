import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/MapHomeScreen';
import MapHomeScreen2 from '../../screens/MapHomeScreen2';

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="MapHome2" component={MapHomeScreen2} />
    </Drawer.Navigator>
  );
}
