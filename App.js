import { StackNavigator } from 'react-navigation';
import SwipeScreen from './screens/SwipeScreen'
import LikedScreen from './screens/LikedScreen'

const App = StackNavigator({
  Swipe: { screen: SwipeScreen },
  Liked: { screen: LikedScreen },
});

export default App;