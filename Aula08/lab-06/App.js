
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CompromissoLista from './screens/CompromissoLista';
import CompromissoHome from './screens/CompromissoHome'

const RootStack = createStackNavigator({
  Home: {
    screen: CompromissoHome
  },
  Compromissos: {
    screen: CompromissoLista
  }
});

export default createAppContainer(RootStack);
