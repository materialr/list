import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-list-item__graphic': true,
  [className]: !!className,
});

const ListItemGraphicAvatar = ({ avatar, className, title }) => (
  <img
    alt={title}
    className={getClassNames(className)}
    height="56"
    src={avatar}
    width="56"
  />
);

ListItemGraphicAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ListItemGraphicAvatar.defaultProps = {
  className: undefined,
};

export default ListItemGraphicAvatar;
