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

//check email or password null
it('Email or password should not be null', async () => {
    let instance = renderer.create(<Login />).getInstance();
    instance.setEmail(null);
    instance.setPassword(null)
    expect(instance.state.email).toEqual(null);
    expect(instance.state.password).toEqual(null);
    const data = await instance.login()
    expect(data).toBe(false);
});
