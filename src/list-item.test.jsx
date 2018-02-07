import { shallow } from 'enzyme';
import React from 'react';

import ListItem, { getClassNames } from './list-item';

const ANCHOR_COMPONENT = () => <p />;
const ANCHOR_PROP_KEY = 'ANCHOR_PROP_KEY';
const ANCHOR_PROP_VALUE = 'ANCHOR_PROP_VALUE';
const ANCHOR_PROPS = { [ANCHOR_PROP_KEY]: ANCHOR_PROP_VALUE };
const CHILDREN = 'CHILDREN';
const CLASS_NAME = 'CLASS_NAME';
const HREF = 'HREF';

test('ListItem > Renders an anchor', () => {
  const wrapper = shallow(
    <ListItem href={HREF}>{CHILDREN}</ListItem>,
    { disableLifecycleMethods: true },
  );
  const expectedFirst = true;
  const expectedSecond = false;
  const expectedThird = false;

  const actualFirst = wrapper.find('a').exists();
  const actualSecond = wrapper.find(ANCHOR_COMPONENT).exists();
  const actualThird = wrapper.find('li').exists();

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
  expect(actualThird).toBe(expectedThird);
});

test('ListItem > Passes anchorProps, classNames, href and children to an anchor', () => {
  const wrapper = shallow(
    <ListItem
      anchorProps={ANCHOR_PROPS}
      className={CLASS_NAME}
      href={HREF}
    >
      {CHILDREN}
    </ListItem>,
    { disableLifecycleMethods: true },
  );
  const anchorProps = wrapper.find('a').props();
  const expectedFirst = ANCHOR_PROP_VALUE;
  const expectedSecond = getClassNames(false, CLASS_NAME);
  const expectedThird = HREF;
  const expectedFourth = CHILDREN;

  const actualFirst = anchorProps[ANCHOR_PROP_KEY];
  const actualSecond = anchorProps.className;
  const actualThird = anchorProps.href;
  const actualFourth = anchorProps.children;

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
  expect(actualThird).toBe(expectedThird);
  expect(actualFourth).toBe(expectedFourth);
});

test('ListItem > Renders a custom anchor component', () => {
  const wrapper = shallow(<ListItem AnchorComponent={ANCHOR_COMPONENT}>{CHILDREN}</ListItem>);
  const expectedFirst = false;
  const expectedSecond = true;
  const expectedThird = false;

  const actualFirst = wrapper.find('a').exists();
  const actualSecond = wrapper.find(ANCHOR_COMPONENT).exists();
  const actualThird = wrapper.find('li').exists();

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
  expect(actualThird).toBe(expectedThird);
});

test('ListItem > Passes anchorProps, classNames and children to a custom anchor component', () => {
  const wrapper = shallow(
    <ListItem
      AnchorComponent={ANCHOR_COMPONENT}
      anchorProps={ANCHOR_PROPS}
      className={CLASS_NAME}
    >
      {CHILDREN}
    </ListItem>,
    { disableLifecycleMethods: true },
  );
  const anchorComponentProps = wrapper.find(ANCHOR_COMPONENT).props();
  const expectedFirst = ANCHOR_PROP_VALUE;
  const expectedSecond = getClassNames(false, CLASS_NAME);
  const expectedThird = CHILDREN;

  const actualFirst = anchorComponentProps[ANCHOR_PROP_KEY];
  const actualSecond = anchorComponentProps.className;
  const actualThird = anchorComponentProps.children;

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
  expect(actualThird).toBe(expectedThird);
});

test('ListItem > Renders a list item', () => {
  const wrapper = shallow(<ListItem>{CHILDREN}</ListItem>);
  const expectedFirst = false;
  const expectedSecond = false;
  const expectedThird = true;

  const actualFirst = wrapper.find('a').exists();
  const actualSecond = wrapper.find(ANCHOR_COMPONENT).exists();
  const actualThird = wrapper.find('li').exists();

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
  expect(actualThird).toBe(expectedThird);
});

test('ListItem > Passes classNames and children to a list item', () => {
  const wrapper = shallow(
    <ListItem className={CLASS_NAME}>{CHILDREN}</ListItem>,
    { disableLifecycleMethods: true },
  );
  const listItemProps = wrapper.find('li').props();
  const expectedFirst = getClassNames(false, CLASS_NAME);
  const expectedSecond = CHILDREN;

  const actualFirst = listItemProps.className;
  const actualSecond = listItemProps.children;

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('ListItem > getClassNames > Renders the default classNames', () => {
  const expected = 'mdc-list-item';

  const actual = getClassNames();

  expect(actual).toBe(expected);
});

test('ListItem > getClassNames > Renders additional classNames', () => {
  const expected = `mdc-list-item mdc-list-item--activated ${CLASS_NAME}`;

  const actual = getClassNames(true, CLASS_NAME);

  expect(actual).toBe(expected);
});
