/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'material-icons': true,
  'mdc-list-item__end-detail': true,
  [className]: !!className,
});

const ListItemEndDetail = ({ className, icon, onClick, title }) => (
  <a
    aria-label={title}
    className={getClassNames(className)}
    onClick={onClick}
    title={title}
  >
    {icon}
  </a>
);

ListItemEndDetail.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

ListItemEndDetail.defaultProps = {
  className: undefined,
  onClick: undefined,
};

export default ListItemEndDetail;
