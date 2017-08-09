import { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'
import routerConfig from './routers/index.js'

// const paramsToProps = (SomeComponent) => {
//   return class extends Component {
//     static navigationOptions = SomeComponent.navigationOptions
//     render() {
//       const { navigation, ...otherProps } = this.props
//       const { state: { params } } = navigation
//       return <SomeComponent {...this.props} {...params} />
//     }
//   }
// }
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
  onTransitionStart: () => { },
  onTransitionEnd: () => { }
};

export default StackNavigator(routerConfig, stackNavigatorConfig)