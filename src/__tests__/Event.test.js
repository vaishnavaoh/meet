import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
    });
    test('render list of events', () => {
        expect(EventWrapper.find("div")).toHaveLength(1);
    });
    test('render list of events', () => {
        expect(EventWrapper.find("button")).toHaveLength(1);
    });

});