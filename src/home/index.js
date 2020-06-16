import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeComponent from '../component/home';
import { removeEmail, isSignedIn } from '../helper/async';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    async componentDidMount() {
        const email = await isSignedIn()
        this.setState({ email: email })
    }

    render() {
        return (
            <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
                <HomeComponent email={this.state.email} />
                <TouchableOpacity onPress={async () => {
                    await removeEmail()
                    this.props.navigation.navigate('login')
                }} style={{ backgroundColor: '#000', padding: 10, marginTop: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '400' }}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;