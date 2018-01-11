import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-list-item__start-detail': true,
  [className]: !!className,
});

const ListItemStartDetailAvatar = ({ avatar, className, title }) => (
  <img
    alt={title}
    className={getClassNames(className)}
    height="56"
    src={avatar}
    width="56"
  />
);

ListItemStartDetailAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ListItemStartDetailAvatar.defaultProps = {
  className: undefined,
};

export default ListItemStartDetailAvatar;
