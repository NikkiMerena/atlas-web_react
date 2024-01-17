// CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    shallow(<CourseListRow textFirstCell="Test" />);
  });

  it('renders one cell with colspan when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Test" />
    );
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').props().colSpan).toBe('2');
  });

  it('renders two cells when isHeader is true and textSecondCell is not null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Test" textSecondCell="Second" />
    );
    expect(wrapper.find('th').length).toBe(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Test" textSecondCell="Second" />
    );
    expect(wrapper.find('td').length).toBe(2);
  });
});

it('applies correct style for header row', () => {
  const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" />);
  const expectedStyle = { backgroundColor: '#deb5b545' };
  expect(wrapper.find('tr').props().style).toEqual(expectedStyle);
});

it('applies correct style for regular row', () => {
  const wrapper = shallow(<CourseListRow textFirstCell="Regular" />);
  const expectedStyle = { backgroundColor: '#f5f5f5ab' };
  except(wrapper.find('tr').props().style).toEqual(expectedStyle);
});
