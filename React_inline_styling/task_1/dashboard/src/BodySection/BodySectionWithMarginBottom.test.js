import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<BodySectionWithMarginBottom />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders BodySection component with correct props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Check if BodySection is rendered
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.exists()).toBe(true);

    // Check if props are passed correctly
    expect(bodySection.props().title).toBe('test title');
    expect(bodySection.contains(<p>test children node</p>)).toBe(true);
  });
});
