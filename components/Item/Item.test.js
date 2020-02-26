import { mount } from 'enzyme';
import React from 'react';
import { Item } from './Item';

describe('Item component test suite', () => {
    let wrapper;
    const itemTitle = 'Kobe XI';
    const itemDescription = 'Sample Description';
    const itemPrice = '299.99';
    const imagePath = require('../../assets/images/basketball1.png');

    beforeEach(() => {
        wrapper = mount(
            <Item
                title={itemTitle}
                description={itemDescription}
                price={itemPrice}
                image={imagePath}
            />
        );
    });

    it('Should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('Should render the title text', () => {
        expect(wrapper.find('[testId="title-text"]')).toBeDefined();
    });

    it('Should render the description text', () => {
        expect(wrapper.find('[testId="description-text"]')).toBeDefined();
    });

    it('Should render the price', () => {
        expect(wrapper.find('[testId="price"]')).toBeDefined();
    });

    it('Should render an Image', () => {
        expect(wrapper.find('Image').first()).toBeDefined();
    });
});
