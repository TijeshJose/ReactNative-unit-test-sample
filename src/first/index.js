import React from 'react';
import { View, Text, TextInput } from 'react-native';
import FirstComponent from '../component/first';

class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    setName(text) {
        this.setState({ name: text })
    }

    render() {
        return (
            <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>Name</Text>
                <TextInput testID={'name'} placeholder={'Enter you name'} value={this.state.name} onChangeText={(text) => this.setName(text)} />
                <FirstComponent name={this.state.name} />
            </View>
        );
    }
}

export default First;