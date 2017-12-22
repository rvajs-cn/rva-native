import {TabNavigator, StackNavigator} from 'react-navigation'
import Home from '../screens/Home'
import Profile from '../screens/Profile'

// Navigation
export const AppNavigator = StackNavigator(
  {
    Home: {
      screen: Home
    },
    Profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: 'Home',
    navBarNoBorder: true,
    topBarElevationShadowEnabled: false
  }
)
