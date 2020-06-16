import React from 'react';
import { View, Text } from 'react-native';

const SecondComponent = props => {

    return (
        <View>
            <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 24, marginTop: 20 }}>{props.email}</Text>
        </View>
    );
}

export default SecondComponent;