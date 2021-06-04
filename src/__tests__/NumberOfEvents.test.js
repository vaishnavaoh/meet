import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
    test('render list of NumberOfEventss', () => {
        expect(NumberOfEventsWrapper.find('input')).toHaveLength(1);
    });
    

});