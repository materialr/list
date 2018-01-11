import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '@material/list/mdc-list.scss';

export const DISPLAY_NAV = 'nav';
export const DISPLAY_LIST = 'list';

const getClassNames = (className, hasDarkTheme, isAvatarList, isDenseList, isTwoLineList) =>
  classnames({
    'mdc-list': true,
    'mdc-list--theme-dark': hasDarkTheme,
    'mdc-list--avatar-list': isAvatarList,
    'mdc-list--dense': isDenseList,
    'mdc-list--two-line': isTwoLineList,
    [className]: !!className,
  });

const isNavList = display => display === DISPLAY_NAV;

const List = ({
  children,
  className,
  display,
  hasDarkTheme,
  isAvatarList,
  isDenseList,
  isTwoLineList,
}) => {
  const classNames =
    getClassNames(className, hasDarkTheme, isAvatarList, isDenseList, isTwoLineList);
  return isNavList(display) ?
    <nav className={classNames}>{children}</nav> :
    <ul className={classNames}>{children}</ul>;
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasDarkTheme: PropTypes.bool,
  isAvatarList: PropTypes.bool,
  isDenseList: PropTypes.bool,
  display: PropTypes.oneOf([DISPLAY_NAV, DISPLAY_LIST]),
  isTwoLineList: PropTypes.bool,
};

List.defaultProps = {
  className: undefined,
  hasDarkTheme: false,
  isAvatarList: false,
  isDenseList: false,
  display: DISPLAY_LIST,
  isTwoLineList: false,
};

export default List;
