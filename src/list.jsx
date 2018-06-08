import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '@material/list/mdc-list.scss';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.getClassNames = this.getClassNames.bind(this);
    this.isNavList = this.isNavList.bind(this);
  }
  getClassNames() {
    const { avatar, className, dense, twoLines } = this.props;
    return classnames({
      'mdc-list': true,
      'mdc-list--avatar-list': avatar,
      'mdc-list--dense': dense,
      'mdc-list--two-line': twoLines,
      [className]: !!className,
    });
  }
  isNavList() {
    return this.props.display === 'nav';
  }
  render() {
    const {
      getClassNames,
      isNavList,
      props: {
        avatar,
        children,
        className,
        dense,
        display,
        twoLines,
        ...props
      },
    } = this;
    return isNavList() ?
      <nav className={getClassNames()} {...props}>{children}</nav> :
      <ul className={getClassNames()} {...props}>{children}</ul>;
  }
}

List.propTypes = {
  avatar: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dense: PropTypes.bool,
  display: PropTypes.oneOf(['nav', 'list']),
  twoLines: PropTypes.bool,
};

List.defaultProps = {
  avatar: false,
  className: undefined,
  dense: false,
  display: 'list',
  twoLines: false,
};

export default List;
