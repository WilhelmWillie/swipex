import { createStackNavigator } from 'react-navigation';
import SwipeScreen from './screens/SwipeScreen'
import LikedScreen from './screens/LikedScreen'

const App = createStackNavigator({
  Swipe: { screen: SwipeScreen },
  Liked: { screen: LikedScreen },
});

export default App;
