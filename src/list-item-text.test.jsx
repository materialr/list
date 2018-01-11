import { shallow } from 'enzyme';
import React from 'react';

import ListItemText from './list-item-text';

const CHILDREN = 'CHILDREN';

test('ListItemText > Renders the default classNames', () => {
  const wrapper = shallow(
    <ListItemText>{CHILDREN}</ListItemText>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-list-item__text';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemText > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ListItemText className={CLASS_NAME}>{CHILDREN}</ListItemText>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-list-item__text ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemText > Renders children as a child', () => {
  const wrapper = shallow(
    <ListItemText>{CHILDREN}</ListItemText>,
    { disableLifecycleMethods: true },
  );
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
