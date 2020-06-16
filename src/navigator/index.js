import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import splash from '../splash';
import login from '../login';
import home from '../home';


const appNavigator = createSwitchNavigator(
    {
        splash: splash,
        login: login,
        home: home
    }, {
    initialRouteName: 'splash',
    navigationOptions: {
        headerVisible: false,
        gesturesEnabled: false
    },
})
export default createAppContainer(appNavigator);