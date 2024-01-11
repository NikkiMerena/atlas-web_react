import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // check for NotificationItem components
  it('renders NotificationItem components', () => {
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the text Here is the list of notifications', () => {
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(true);
  });

  // New test for checking correct rendering of NotificationItem elements
  it('first NotificationItem renders the right html', () => {
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.props().value).toEqual('New course available');
    expect(firstItem.props().type).toEqual('default');
  });
});
