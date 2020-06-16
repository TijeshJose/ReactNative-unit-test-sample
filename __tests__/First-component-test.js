import 'react-native';
import React from 'react';
import FirstComponent from '../src/component/first';

import renderer from 'react-test-renderer';

//check first page renders correctly
it('First page component renders correctly', () => {
    const tree = renderer.create(<FirstComponent name={'Test'} />).toJSON();
    expect(tree).toMatchSnapshot();
});

//check first component receives props correctly
it('Check props received correctly', () => {
    const instance = renderer.create(<FirstComponent name={'Test'} />).root;
    expect(instance.props.name).toEqual('Test');
});