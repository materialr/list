/*
  eslint-disable
  jsx-a11y/no-static-element-interactions,
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/anchor-is-valid
*/
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'material-icons': true,
  'mdc-list-item__meta': true,
  [className]: !!className,
});

const ListItemMeta = ({ className, icon, onClick, title, ...props }) => (
  <a
    aria-label={title}
    className={getClassNames(className)}
    onClick={onClick}
    title={title}
    {...props}
  >
    {icon}
  </a>
);

ListItemMeta.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

ListItemMeta.defaultProps = {
  className: undefined,
  onClick: undefined,
};

export default ListItemMeta;
