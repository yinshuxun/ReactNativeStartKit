import Spec01 from './views/Spec01'
import FlatListView from './views/FlatListView'
import MainScreen from './MainScreen'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'

export const routerConfig = {
    Main: {
        screen: MainScreen
    },
    Spec01: {
        screen: Spec01
    },
    Flat: {
        screen: FlatListView
    }
}

export const stackNavigatorConfig = {
  initialRouteName: 'Main',
  navigationOptions: {
    headerBackTitle: null,
    headerTintColor: 'white',
    showIcon: true,
    swipeEnabled: false,
    animationEnabled: false,
    headerStyle: {
      backgroundColor: '#f2f2f2'
    }
  },
  mode: 'card',
  paths: 'rax/: Login',
  headerMode: 'float',
  transitionConfig: (() => ({
    screenInterpolator: CardStackStyleInterpolator.forHorizontal // android's config about jump to next page 
  })),
  onTransitionStart: () => {},
  onTransitionEnd: () => {}
};

