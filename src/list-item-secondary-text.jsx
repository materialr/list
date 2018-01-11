import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-list-item__secondary-text': true,
  [className]: !!className,
});

const ListItemSecondaryText = ({ className, text }) => (
  <span className={getClassNames(className)}>
    {text}
  </span>
);

ListItemSecondaryText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

ListItemSecondaryText.defaultProps = {
  className: undefined,
};

export default ListItemSecondaryText;
