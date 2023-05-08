import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaAnime from './components/Anime';
import TelaFilme from './components/Filme';
import TelaSerie from './components/Serie';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name='Anime' component={TelaAnime}/>
      <Drawer.Screen name='Filme' component={TelaFilme}/>
      <Drawer.Screen name='Série' component={TelaSerie}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

