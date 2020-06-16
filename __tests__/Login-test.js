import 'react-native';
import React from 'react';
import Login from '../src/login';

import renderer from 'react-test-renderer';
import AsyncStorage from '@react-native-community/async-storage';


//check login page renders correctly
it('Login page renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});

//check with mock async storage value
it('checks if Async Storage is used', async () => {
    await AsyncStorage.getItem('email');

    expect(await AsyncStorage.getItem).toBeCalledWith('email');
})

//check functions is called and state is set properly
it('Check functions and states are called properly', () => {
    let instance = renderer.create(<Login />).getInstance();
    instance.setEmail("test");
    instance.setPassword("password")
    expect(instance.state.email).toEqual("test");
    expect(instance.state.password).toEqual("password");
});