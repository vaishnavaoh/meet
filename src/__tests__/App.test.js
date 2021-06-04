import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
//import EventList from '../EventList';
describe('<App /> component', () => {
    let AppWrapper;
    let AppWrapperMount;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
        AppWrapperMount = mount(<App />);

    });

    test('render list of events', () => {
        expect(AppWrapper.find('div')).toHaveLength(1);
    });
    test('state', () => {
        const state=AppWrapperMount.state()
        console.log(state.data)
       // expect(state.data).toBe('[test]')
    });
  

    // test('render NumberOfEvents', () => {
    //     expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    // })

});