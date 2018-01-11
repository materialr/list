import { shallow } from 'enzyme';
import React from 'react';

import ListItemStartDetail, { iconPropType, titlePropType } from './list-item-start-detail';
import ListItemStartDetailAvatar from './list-item-start-detail-avatar';
import ListItemStartDetailIcon from './list-item-start-detail-icon';

const AVATAR = 'AVATAR';
const CLASS_NAME = 'CLASS_NAME';
const COMPONENT_NAME = 'COMPONENT_NAME';
const ICON = 'ICON';
const TITLE = 'TITLE';

test('ListItemStartDetail > Renders ListItemStartDetailIcon with an icon prop', () => {
  const wrapper = shallow(<ListItemStartDetail icon={ICON} />, { disableLifecycleMethods: true });
  const expectedFirst = true;
  const expectedSecond = false;

  const actualFirst = wrapper.find(ListItemStartDetailIcon).exists();
  const actualSecond = wrapper.find(ListItemStartDetailAvatar).exists();

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('ListItemStartDetail > Passes className and icon to ListItemStartDetailIcon', () => {
  const wrapper = shallow(
    <ListItemStartDetail className={CLASS_NAME} icon={ICON} />,
    { disableLifecycleMethods: true },
  );
  const iconProps = wrapper.find(ListItemStartDetailIcon).props();
  const expectedFirst = CLASS_NAME;
  const expectedSecond = ICON;

  const actualFirst = iconProps.className;
  const actualSecond = iconProps.icon;

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('ListItemStartDetail > Renders ListItemStartDetailAvatar with an avatar prop', () => {
  const wrapper = shallow(
    <ListItemStartDetail avatar={AVATAR} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expectedFirst = true;
  const expectedSecond = false;

  const actualFirst = wrapper.find(ListItemStartDetailAvatar).exists();
  const actualSecond = wrapper.find(ListItemStartDetailIcon).exists();

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('ListItemStartDetail > Passes avatar, className and title to ListItemStartDetailAvatar', () => {
  const wrapper = shallow(
    <ListItemStartDetail avatar={AVATAR} className={CLASS_NAME} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const avatarProps = wrapper.find(ListItemStartDetailAvatar).props();
  const expectedFirst = AVATAR;
  const expectedSecond = CLASS_NAME;
  const expectedThird = TITLE;

  const actualFirst = avatarProps.avatar;
  const actualSecond = avatarProps.className;
  const actualThird = avatarProps.title;

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
  expect(actualThird).toBe(expectedThird);
});

test('ListItemStartDetail > iconPropType > Throws an error when no avatar or icon is passed in', () => {
  const expected = new Error(`Either prop 'avatar' or 'icon' is required in ${COMPONENT_NAME}`);

  const actual = iconPropType({}, undefined, COMPONENT_NAME);

  expect(actual).toEqual(expected);
});

test('ListItemStartDetail > titlePropType > Throws an error when an avatar but no title is passed in', () => {
  const expected = new Error(`Prop 'title' is required when supplying an avatar to ${COMPONENT_NAME}`);

  const actual = titlePropType({ avatar: AVATAR }, undefined, COMPONENT_NAME);

  expect(actual).toEqual(expected);
});
