import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  it('renders an h2 and the children correctly', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check for h2 element with correct title
    expect(wrapper.find('h2').text()).toBe('test title');

    // Check for p element with correct text
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});
