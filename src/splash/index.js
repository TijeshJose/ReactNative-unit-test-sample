import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { isSignedIn } from '../helper/async';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    //check logged in
    async componentDidMount() {
        try {
            const isLoggedIn = await isSignedIn();
            if (isLoggedIn) {
                this.props.navigation.navigate('home')
            } else {
                this.props.navigation.navigate('login')
            }
        } catch (e) {
            this.props.navigation.navigate('login')
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator />
            </View>
        );
    }
}

export default Splash;