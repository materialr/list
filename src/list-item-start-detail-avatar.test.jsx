import { shallow } from 'enzyme';
import React from 'react';

import ListItemStartDetailAvatar from './list-item-start-detail-avatar';

const AVATAR = 'AVATAR';
const TITLE = 'TITLE';

test('ListItemStartDetailAvatar > Renders the default classNames', () => {
  const wrapper = shallow(
    <ListItemStartDetailAvatar avatar={AVATAR} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-list-item__start-detail';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemStartDetailAvatar > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ListItemStartDetailAvatar avatar={AVATAR} className={CLASS_NAME} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-list-item__start-detail ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemStartDetailAvatar > Renders title as alt text', () => {
  const wrapper = shallow(
    <ListItemStartDetailAvatar avatar={AVATAR} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = TITLE;

  const actual = wrapper.props().alt;

  expect(actual).toBe(expected);
});

test('ListItemStartDetailAvatar > Renders avatar as image src', () => {
  const wrapper = shallow(
    <ListItemStartDetailAvatar avatar={AVATAR} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = AVATAR;

  const actual = wrapper.props().src;

  expect(actual).toBe(expected);
});
