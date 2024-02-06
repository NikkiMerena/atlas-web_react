import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

describe('Header', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });
});

it('does not render logoutSection with default context', () => {
  const wrapper = mount(<Header />);
  expect(wrapper.find('#logoutSection').exists()).toBe(false);
});

it('renders logoutSection with user context', () => {
  const user = { isLoggedIn: true, email: 'user@test.com' };
  const wrapper = mount(
    <Header />,
    {
      wrappingComponent: AppContext.Provider,
      wrappingComponentProps: { value: { user: user, logOut: jest.fn() } },
    }
  );
  expect(wrapper.find('#logoutSection').exists()).toBe(true);
});

it('calls logOut when clicking logout link', () => {
  const user = { isLoggedIn: true, email: 'user@test.com' };
  const logOutSpy = jest.fn();
  const wrapper = mount(
    <Header />,
    {
      wrappingComponent: AppContext.Provider,
      wrappingComponentProps: { value: { user: user, logOut: logOutSpy } },
    }
  );
  wrapper.find('#logoutSection a').simulate('click');
  expect(logOutSpy).toHaveBeenCalled();
});
