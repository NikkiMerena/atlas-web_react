// CourseList.js
import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  courseTable: {
    width: '90%',
    borderCollapse: 'collapse',
    border: '1px solid #e0e0e0',
    margin: '1rem auto',
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
  },

});

const CourseList = ({ listCourses }) => (
  <table id="CourseList">
    <thead>
      <CourseListRow isHeader textFirstCell="Available courses" />
      <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
    </thead>
    <tbody>
      {listCourses.length === 0 ? (
        <CourseListRow textFirstCell="No course available yet" />
      ) : (
        listCourses.map(course => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
        ))
      )}
    </tbody>
  </table>
);

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
