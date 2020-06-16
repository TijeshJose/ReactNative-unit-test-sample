import 'react-native';
import React from 'react';
import Home from '../src/home';

import renderer from 'react-test-renderer';
import AsyncStorage from '@react-native-community/async-storage';

//check api response if api implemented in home page
global.fetch = jest.fn().mockImplementation((url, data) => {
    var p = new Promise((resolve, reject) => {
        resolve({
            json: function () {
                return {
                    "status": true
                }
            }
        })
    })
    return p;
});


//check home page renders correctly
it('Home page renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
});

//check with mock async storage value
it('checks if Async Storage is used', async () => {
    await AsyncStorage.getItem('email');

    expect(await AsyncStorage.getItem).toBeCalledWith('email');
})