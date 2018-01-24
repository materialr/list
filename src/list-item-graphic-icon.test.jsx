import { shallow } from 'enzyme';
import React from 'react';

import ListItemGraphicIcon from './list-item-graphic-icon';

const ICON = 'ICON';

test('ListItemGraphicIcon > Renders the default classNames', () => {
  const wrapper = shallow(
    <ListItemGraphicIcon icon={ICON} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-list-item__graphic';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemGraphicIcon > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ListItemGraphicIcon className={CLASS_NAME} icon={ICON} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-list-item__graphic ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemGraphicIcon > Renders icon as a child', () => {
  const wrapper = shallow(
    <ListItemGraphicIcon icon={ICON} />,
    { disableLifecycleMethods: true },
  );
  const expected = ICON;

  const actual = wrapper.find('i').props().children;

  expect(actual).toBe(expected);
});
