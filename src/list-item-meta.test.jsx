import { shallow } from 'enzyme';
import React from 'react';

import ListItemMeta from './list-item-meta';

const ICON = 'ICON';
const TITLE = 'TITLE';

test('ListItemMeta > Renders the default classNames', () => {
  const wrapper = shallow(
    <ListItemMeta icon={ICON} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'material-icons mdc-list-item__meta';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemMeta > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ListItemMeta className={CLASS_NAME} icon={ICON} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = `material-icons mdc-list-item__meta ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemMeta > Renders icon as a child', () => {
  const wrapper = shallow(
    <ListItemMeta icon={ICON} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = ICON;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});

test('ListItemMeta > Renders title as title and aria-label', () => {
  const wrapper = shallow(
    <ListItemMeta icon={ICON} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = TITLE;

  const actualFirst = wrapper.props()['aria-label'];
  const actualSecond = wrapper.props().title;

  expect(actualFirst).toBe(expected);
  expect(actualSecond).toBe(expected);
});
