import { shallow } from 'enzyme';
import React from 'react';

import ListItem from './list-item';

const ANCHOR_COMPONENT = () => <p />;
const ANCHOR_PROP_KEY = 'ANCHOR_PROP_KEY';
const ANCHOR_PROP_VALUE = 'ANCHOR_PROP_VALUE';
const ANCHOR_PROPS = { [ANCHOR_PROP_KEY]: ANCHOR_PROP_VALUE };
const CHILDREN = 'CHILDREN';
const CLASS_NAME = 'CLASS_NAME';
const HREF = 'HREF';

test('Renders the default classNames', () => {
  const wrapper = shallow(<ListItem>{CHILDREN}</ListItem>, { disableLifecycleMethods: true });
  const expected = 'mdc-list-item';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders additional classNames based on props', () => {
  const wrapper = shallow(
    <ListItem activated className={CLASS_NAME}>{CHILDREN}</ListItem>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-list-item mdc-list-item--activated ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders an anchor', () => {
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

test('Passes anchorProps, href and children to an anchor', () => {
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
  const expectedSecond = HREF;
  const expectedThird = CHILDREN;

  const actualFirst = anchorProps[ANCHOR_PROP_KEY];
  const actualSecond = anchorProps.href;
  const actualThird = anchorProps.children;

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
  expect(actualThird).toBe(expectedThird);
});

test('Renders a custom anchor component', () => {
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

test('Passes anchorProps and children to a custom anchor component', () => {
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
  const expectedSecond = CHILDREN;

  const actualFirst = anchorComponentProps[ANCHOR_PROP_KEY];
  const actualSecond = anchorComponentProps.children;

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('Renders a list item', () => {
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

test('Passes children to a list item', () => {
  const wrapper = shallow(
    <ListItem className={CLASS_NAME}>{CHILDREN}</ListItem>,
    { disableLifecycleMethods: true },
  );
  const listItemProps = wrapper.find('li').props();
  const expected = CHILDREN;

  const actual = listItemProps.children;

  expect(actual).toBe(expected);
});
