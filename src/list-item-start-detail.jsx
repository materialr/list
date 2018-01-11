import PropTypes from 'prop-types';
import React from 'react';

import ListItemStartDetailAvatar from './list-item-start-detail-avatar';
import ListItemStartDetailIcon from './list-item-start-detail-icon';

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

const ListItemStartDetail = ({ avatar, className, icon, title }) => (
  icon ?
    <ListItemStartDetailIcon className={className} icon={icon} /> :
    <ListItemStartDetailAvatar avatar={avatar} className={className} title={title} />
);

ListItemStartDetail.propTypes = {
  avatar: PropTypes.string,
  className: PropTypes.string,
  icon: iconPropType,
  title: titlePropType,
};

ListItemStartDetail.defaultProps = {
  avatar: undefined,
  className: undefined,
  icon: undefined,
  title: undefined,
};

export default ListItemStartDetail;
