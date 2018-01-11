import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-list-group': true,
  [className]: !!className,
});

const ListGroup = ({ className, children }) => (
  <div className={getClassNames(className)}>
    {children}
  </div>
);

ListGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ListGroup.defaultProps = {
  className: undefined,
};

export default ListGroup;
