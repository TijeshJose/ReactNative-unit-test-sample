import 'react-native';
import React from 'react';
import First from '../src/first';

import renderer from 'react-test-renderer';

//check first page renders correctly
it('First page renders correctly', () => {
    const tree = renderer.create(<First />).toJSON();
    expect(tree).toMatchSnapshot();
});

//check set name function is called properly
it('Check functions are called properly', () => {
    let instance = renderer.create(<First />).getInstance();
    instance.setName("test");
    expect(instance.state.name).toEqual("test");
});