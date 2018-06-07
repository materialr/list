import PropTypes from 'prop-types';
import React from 'react';

import ListItemGraphicAvatar from './list-item-graphic-avatar';
import ListItemGraphicIcon from './list-item-graphic-icon';

export const iconPropType = (props, propName, componentName) => (
  !props.avatar && !props.icon ?
    new Error(`Either prop 'avatar' or 'icon' is required in ${componentName}`) :
    null
);
export const titlePropType = (props, propName, componentName) => (
  !!props.avatar && !props.title ?
    new Error(`Prop 'title' is required when supplying an avatar to ${componentName}`) :
    null
);

const ListItemGraphic = ({ avatar, className, icon, title, ...props }) => (
  icon ?
    <ListItemGraphicIcon className={className} icon={icon} {...props} /> :
    <ListItemGraphicAvatar avatar={avatar} className={className} title={title} {...props} />
);

ListItemGraphic.propTypes = {
  avatar: PropTypes.string,
  className: PropTypes.string,
  icon: iconPropType,
  title: titlePropType,
};

ListItemGraphic.defaultProps = {
  avatar: undefined,
  className: undefined,
  icon: undefined,
  title: undefined,
};

export default ListItemGraphic;
