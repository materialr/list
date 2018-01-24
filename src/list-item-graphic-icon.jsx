import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-list-item__graphic': true,
  [className]: !!className,
});

const ListItemGraphicIcon = ({ className, icon }) => (
  <span className={getClassNames(className)} role="presentation">
    <i aria-hidden="true" className="material-icons">{icon}</i>
  </span>
);

ListItemGraphicIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

ListItemGraphicIcon.defaultProps = {
  className: undefined,
};

export default ListItemGraphicIcon;
