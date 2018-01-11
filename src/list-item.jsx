import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const getClassNames = className => classnames({
  'mdc-list-item': true,
  [className]: !!className,
});

const isAnchorListItem = href => !!href;
const isCustomAnchor = AnchorComponent => !!AnchorComponent;

const ListItem = ({ AnchorComponent, anchorProps, className, children, href }) => {
  const classNames = getClassNames(className);
  if (isAnchorListItem(href)) {
    return <a {...anchorProps} className={classNames} href={href}>{children}</a>;
  }
  if (isCustomAnchor(AnchorComponent)) {
    return <AnchorComponent {...anchorProps} className={classNames}>{children}</AnchorComponent>;
  }
  return <li className={classNames}>{children}</li>;
};

ListItem.propTypes = {
  AnchorComponent: PropTypes.func,
  anchorProps: PropTypes.shape(),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

ListItem.defaultProps = {
  AnchorComponent: undefined,
  anchorProps: {},
  className: undefined,
  href: undefined,
};

export default ListItem;
