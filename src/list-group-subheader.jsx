import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-list-group__subheader': true,
  [className]: !!className,
});

const ListGroupSubheader = ({ className, title, ...props }) => (
  <h3 className={getClassNames(className)} {...props}>
    {title}
  </h3>
);

ListGroupSubheader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ListGroupSubheader.defaultProps = {
  className: undefined,
};

export default ListGroupSubheader;
