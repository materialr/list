import { shallow } from 'enzyme';
import React from 'react';

import ListItemGraphicAvatar from './list-item-graphic-avatar';

const AVATAR = 'AVATAR';
const TITLE = 'TITLE';

test('ListItemGraphicAvatar > Renders the default classNames', () => {
  const wrapper = shallow(
    <ListItemGraphicAvatar avatar={AVATAR} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-list-item__graphic';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemGraphicAvatar > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ListItemGraphicAvatar avatar={AVATAR} className={CLASS_NAME} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-list-item__graphic ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemGraphicAvatar > Renders title as alt text', () => {
  const wrapper = shallow(
    <ListItemGraphicAvatar avatar={AVATAR} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = TITLE;

  const actual = wrapper.props().alt;

  expect(actual).toBe(expected);
});

test('ListItemGraphicAvatar > Renders avatar as image src', () => {
  const wrapper = shallow(
    <ListItemGraphicAvatar avatar={AVATAR} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = AVATAR;

  const actual = wrapper.props().src;

  expect(actual).toBe(expected);
});
