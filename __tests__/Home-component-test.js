import 'react-native';
import React from 'react';
import HomeComponent from '../src/component/home';

import renderer from 'react-test-renderer';

//check first page renders correctly
it('Home page component renders correctly', () => {
    const tree = renderer.create(<HomeComponent email={'test'} />).toJSON();
    expect(tree).toMatchSnapshot();
});

//check first component receives props correctly
it('Check props received correctly', () => {
    const instance = renderer.create(<HomeComponent email={'test'} />).root;
    expect(instance.props.email).toEqual('test');
});