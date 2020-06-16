import React from 'react';
import { View, Text } from 'react-native';

const FirstComponent = props => {

    return (
        <View>
            <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 24, marginTop: 20 }}>{props.name}</Text>
        </View>
    );
}

export default FirstComponent;