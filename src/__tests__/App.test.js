import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
//import EventList from '../EventList';
describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test('render list of events', () => {
        expect(AppWrapper.find('div')).toHaveLength(1);
    });

  

    // test('render NumberOfEvents', () => {
    //     expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    // })

});