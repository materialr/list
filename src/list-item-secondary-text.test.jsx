import { shallow } from 'enzyme';
import React from 'react';

import ListItemSecondaryText from './list-item-secondary-text';

const TEXT = 'TEXT';

test('ListItemSecondaryText > Renders the default classNames', () => {
  const wrapper = shallow(<ListItemSecondaryText text={TEXT} />, { disableLifecycleMethods: true });
  const expected = 'mdc-list-item__secondary-text';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemSecondaryText > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ListItemSecondaryText className={CLASS_NAME} text={TEXT} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-list-item__secondary-text ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemSecondaryText > Renders text as a child', () => {
  const wrapper = shallow(<ListItemSecondaryText text={TEXT} />, { disableLifecycleMethods: true });
  const expected = TEXT;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
