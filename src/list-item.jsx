import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const getClassNames = (activated, className) => classnames({
  'mdc-list-item': true,
  'mdc-list-item--activated': activated,
  [className]: !!className,
});

const isAnchorListItem = href => !!href;
const isCustomAnchor = AnchorComponent => !!AnchorComponent;

const ListItem = ({ activated, AnchorComponent, anchorProps, className, children, href }) => {
  const classNames = getClassNames(activated, className);
  if (isAnchorListItem(href)) {
    return <a {...anchorProps} className={classNames} href={href}>{children}</a>;
  }
  if (isCustomAnchor(AnchorComponent)) {
    return <AnchorComponent {...anchorProps} className={classNames}>{children}</AnchorComponent>;
  }
  return <li className={classNames}>{children}</li>;
};

ListItem.propTypes = {
  activated: PropTypes.bool,
  AnchorComponent: PropTypes.func,
  anchorProps: PropTypes.shape(),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

ListItem.defaultProps = {
  activated: false,
  AnchorComponent: undefined,
  anchorProps: {},
  className: undefined,
  href: undefined,
};

export default ListItem;
