import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
//import ComponentsScreen from './src/screens/ComponentsScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import MyExercise from './src/screens/MyExercise';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentsScreen,
    Exercise:MyExercise,
    List:ListScreen,
    Image:ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "MyFirstReactApp"
    }
  }
);

export default createAppContainer(navigator);
