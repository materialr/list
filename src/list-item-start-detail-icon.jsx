import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-list-item__start-detail': true,
  [className]: !!className,
});

const ListItemStartDetailIcon = ({ className, icon }) => (
  <span className={getClassNames(className)} role="presentation">
    <i aria-hidden="true" className="material-icons">{icon}</i>
  </span>
);

ListItemStartDetailIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

ListItemStartDetailIcon.defaultProps = {
  className: undefined,
};

export default ListItemStartDetailIcon;
