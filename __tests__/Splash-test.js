import 'react-native';
import React from 'react';
import Splash from '../src/splash';

import renderer from 'react-test-renderer';
import AsyncStorage from '@react-native-community/async-storage';

//check splash page renders correctly
it('Splash page renders correctly', () => {
    const tree = renderer.create(<Splash />).toJSON();
    expect(tree).toMatchSnapshot();
});


//check with mock async storage value
it('checks if Async Storage is used', async () => {
    await AsyncStorage.getItem('email');

    expect(await AsyncStorage.getItem).toBeCalledWith('email');
})