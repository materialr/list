import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-list-item__text': true,
  [className]: !!className,
});

const ListItemText = ({ className, children }) => (
  <span className={getClassNames(className)}>
    {children}
  </span>
);

ListItemText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ListItemText.defaultProps = {
  className: undefined,
};

export default ListItemText;
