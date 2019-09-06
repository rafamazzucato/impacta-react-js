
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cursos from './screens/Cursos';
import Contatos from './screens/Contatos';
import Home from './screens/Home'

const RootStack = createStackNavigator({
  Home: {
    navigationOptions : {
      title: 'Home',
    },
    screen: Home
  },
  Cursos: {
    navigationOptions : {
      title: 'Cursos',
    },
    screen: Cursos
  },
  Contatos: {
    navigationOptions : {
      title: 'Contatos',
    },
    screen: Contatos
  }
});

export default createAppContainer(RootStack);