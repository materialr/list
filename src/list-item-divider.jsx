import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (className, inset) => classnames({
  'mdc-list-divider': true,
  'mdc-list-divider--inset': inset,
  [className]: !!className,
});

const ListItemDivider = ({ className, inset }) => (
  <li className={getClassNames(className, inset)} />
);

ListItemDivider.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
};

ListItemDivider.defaultProps = {
  className: undefined,
  inset: false,
};

export default ListItemDivider;
