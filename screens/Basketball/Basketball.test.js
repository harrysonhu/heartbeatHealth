import React from 'react';
import { BasketballScreen } from './BasketballScreen';
import { mount } from 'enzyme';
import fetch from 'node-fetch';

jest.mock('node-fetch');
const { Response } = jest.requireActual('node-fetch');

describe('BasketballScreen component test suite', () => {
    let wrapper;
    fetch.mockReturnValue(Promise.resolve(new Response('10')));

    beforeEach(() => {
        wrapper = mount(<BasketballScreen />);
    });

    it('Should render without crashing', () => {
        expect(wrapper).toBeDefined();
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('Should render two columns of shoes', () => {
        expect(wrapper.find('[testId="shoe-column-one"]')).toBeDefined();
        expect(wrapper.find('[testId="shoe-column-two"]')).toBeDefined();
    });
});
