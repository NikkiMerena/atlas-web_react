import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  headerRowSpan2: {
    textAlign: 'center',
  },

  secondHeaderRow: {
    borderTop: '2px solid #e0e0e0',
    borderBottom: '2px solid #e0e0e0',
  },

  secondHeaderRowFirstCell: {
    textAlign: 'left',
    width: '70%',
  },

  secondHeaderRowSecondCell: {
    textAlign: 'left',
    width: '30%',
  },

  bodyRowCell: {
    textAlign: 'left',
  },

  row: {
    backgroundColor: '#f5f5f5ab',
  },

  header: {
    backgroundColor: '#deb5b545',
  },

  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const rowStyle = css(
    isHeader ? styles.header : styles.row,
    !isHeader && isChecked && styles.rowChecked
  );

  if(isHeader) {
    if(textSecondCell === null) {
      return (
        <tr className={rowStyle}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={rowStyle}>
          <th className={css(styles.secondHeaderRowFirstCell)}>{textFirstCell}</th>
          <th className={css(styles.secondHeaderRowSecondCell)}>{textSecondCell}</th>
        </tr>
      );
    }

  } else {
    return (
      <tr className={rowStyle}>
        <td className={css(styles.bodyRowCell)}>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          {textFirstCell}
        </td>
        <td className={css(styles.bodyRowCell)}>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

export default CourseListRow;
