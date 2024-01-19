import React, { Component } from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet } from 'aphrodite';

const Styles = StyleSheet.create({

  bodyMargin: {
    margin: '40px',
  }
})

class BodySectionWithMarginBottom extends Component {
  render () {
    return (
      <div className={css(styles.bodayMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default BodySectionWithMarginBottom;
