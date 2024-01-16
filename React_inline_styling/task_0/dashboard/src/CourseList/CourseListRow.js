// CourseListRow.js - React component that accepts three props: textFirstCell, textSecondCell, and isHeader.
import React from 'react';
import PropTypes from 'prop-types';

// Define the styles
const rowStyle = { backgroundColor: '#f5f5f5ab' };
const headerRowStyle = { backgroundColor: 'deb5b545' };

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    // Apply styles condionally
    const style = isHeader ? headerRowStyle : rowStyle;

    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr style={style}>
                    <th colSpan="2">{textFirstCell}</th>
                </tr>
            );
        } else {
            return (
                <tr>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else {
        return (
            <tr style={style}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    };
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};

export default CourseListRow;
