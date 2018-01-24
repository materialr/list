import { shallow } from 'enzyme';
import React from 'react';

import ListItemGraphic, { iconPropType, titlePropType } from './list-item-graphic';
import ListItemGraphicAvatar from './list-item-graphic-avatar';
import ListItemGraphicIcon from './list-item-graphic-icon';

const AVATAR = 'AVATAR';
const CLASS_NAME = 'CLASS_NAME';
const COMPONENT_NAME = 'COMPONENT_NAME';
const ICON = 'ICON';
const TITLE = 'TITLE';

test('ListItemGraphic > Renders ListItemGraphicIcon with an icon prop', () => {
  const wrapper = shallow(<ListItemGraphic icon={ICON} />, { disableLifecycleMethods: true });
  const expectedFirst = true;
  const expectedSecond = false;

  const actualFirst = wrapper.find(ListItemGraphicIcon).exists();
  const actualSecond = wrapper.find(ListItemGraphicAvatar).exists();

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('ListItemGraphic > Passes className and icon to ListItemGraphicIcon', () => {
  const wrapper = shallow(
    <ListItemGraphic className={CLASS_NAME} icon={ICON} />,
    { disableLifecycleMethods: true },
  );
  const iconProps = wrapper.find(ListItemGraphicIcon).props();
  const expectedFirst = CLASS_NAME;
  const expectedSecond = ICON;

  const actualFirst = iconProps.className;
  const actualSecond = iconProps.icon;

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('ListItemGraphic > Renders ListItemGraphicAvatar with an avatar prop', () => {
  const wrapper = shallow(
    <ListItemGraphic avatar={AVATAR} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expectedFirst = true;
  const expectedSecond = false;

  const actualFirst = wrapper.find(ListItemGraphicAvatar).exists();
  const actualSecond = wrapper.find(ListItemGraphicIcon).exists();

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('ListItemGraphic > Passes avatar, className and title to ListItemGraphicAvatar', () => {
  const wrapper = shallow(
    <ListItemGraphic avatar={AVATAR} className={CLASS_NAME} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const avatarProps = wrapper.find(ListItemGraphicAvatar).props();
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

test('ListItemGraphic > iconPropType > Throws an error when no avatar or icon is passed in', () => {
  const expected = new Error(`Either prop 'avatar' or 'icon' is required in ${COMPONENT_NAME}`);

  const actual = iconPropType({}, undefined, COMPONENT_NAME);

  expect(actual).toEqual(expected);
});

test('ListItemGraphic > titlePropType > Throws an error when an avatar but no title is passed in', () => {
  const expected = new Error(`Prop 'title' is required when supplying an avatar to ${COMPONENT_NAME}`);

  const actual = titlePropType({ avatar: AVATAR }, undefined, COMPONENT_NAME);

  expect(actual).toEqual(expected);
});
