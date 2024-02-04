// Footer.test.js
import { global } from 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

describe('Footer', () => {

    const mockContextLoggedOut = {
        user: {
            isLoggedIn: false,
        }
    };
    const mockContextLoggedIn ={
        user: {
            isLoggedIn: true,
        }
    };

    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders Copyright text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text().includes('Copyright')).toBe(true);
    });

    it('does not display Contact us link when logged out', () => {
        const wrapper = mount(
            <AppContext.Provider value={mockContextLoggedOut}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a').exists()).toBe(false);
    });

    it('displays Contact us link when logged in', () => {
        const wrapper = mount(
            <AppContext.Provider value={mockContextLoggedIn}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a').text()).toContain('Contact us');
    });
});
