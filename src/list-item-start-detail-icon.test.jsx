import { shallow } from 'enzyme';
import React from 'react';

import ListItemStartDetailIcon from './list-item-start-detail-icon';

const ICON = 'ICON';

test('ListItemStartDetailIcon > Renders the default classNames', () => {
  const wrapper = shallow(
    <ListItemStartDetailIcon icon={ICON} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-list-item__start-detail';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemStartDetailIcon > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ListItemStartDetailIcon className={CLASS_NAME} icon={ICON} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-list-item__start-detail ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemStartDetailIcon > Renders icon as a child', () => {
  const wrapper = shallow(
    <ListItemStartDetailIcon icon={ICON} />,
    { disableLifecycleMethods: true },
  );
  const expected = ICON;

  const actual = wrapper.find('i').props().children;

  expect(actual).toBe(expected);
});
