import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.getClassNames = this.getClassNames.bind(this);
    this.isAnchorListItem = this.isAnchorListItem.bind(this);
    this.isCustomAnchor = this.isCustomAnchor.bind(this);
  }
  getClassNames() {
    const { activated, className } = this.props;
    return classnames({
      'mdc-list-item': true,
      'mdc-list-item--activated': activated,
      [className]: !!className,
    });
  }
  isAnchorListItem() {
    return !!this.props.href;
  }
  isCustomAnchor() {
    return !!this.props.AnchorComponent;
  }
  render() {
    const {
      getClassNames,
      isAnchorListItem,
      isCustomAnchor,
      props: {
        activated,
        AnchorComponent,
        anchorProps,
        className,
        children,
        href,
        ...props
      },
    } = this;
    if (isAnchorListItem()) {
      return <a {...anchorProps} className={getClassNames()} href={href} {...props}>{children}</a>;
    }
    if (isCustomAnchor()) {
      return (
        <AnchorComponent
          className={getClassNames()}
          {...anchorProps}
          {...props}
        >
          {children}
        </AnchorComponent>
      );
    }
    return <li className={getClassNames()} {...props}>{children}</li>;
  }
}

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
