import { shallow } from 'enzyme';
import React from 'react';

import List from './list';

const CHILDREN = 'CHILDREN';

test('List > Renders the default classNames', () => {
  const wrapper = shallow(<List>{CHILDREN}</List>, { disableLifecycleMethods: true });
  const expected = 'mdc-list';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('List > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <List className={CLASS_NAME} avatar dense twoLines>{CHILDREN}</List>,
    { disableLifecycleMethods: true },
  );
  const expected =
    `mdc-list mdc-list--avatar-list mdc-list--dense mdc-list--two-line ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('List > Renders as a list by default', () => {
  const wrapper = shallow(<List>{CHILDREN}</List>, { disableLifecycleMethods: true });
  const expectedFirst = true;
  const expectedSecond = false;

  const actualFirst = wrapper.find('ul').exists();
  const actualSecond = wrapper.find('nav').exists();

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('List > Passes the className and children to the list', () => {
  const wrapper = shallow(<List>{CHILDREN}</List>, { disableLifecycleMethods: true });
  const listProps = wrapper.props();
  const expectedFirst = CHILDREN;
  const expectedSecond = 'mdc-list';

  const actualFirst = listProps.children;
  const actualSecond = listProps.className;

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('List > Renders as a nav', () => {
  const wrapper = shallow(<List display="nav">{CHILDREN}</List>, { disableLifecycleMethods: true });
  const expectedFirst = false;
  const expectedSecond = true;

  const actualFirst = wrapper.find('ul').exists();
  const actualSecond = wrapper.find('nav').exists();

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('List > Passes the className and children to the list', () => {
  const wrapper = shallow(<List display="nav">{CHILDREN}</List>, { disableLifecycleMethods: true });
  const listProps = wrapper.props();
  const expectedFirst = CHILDREN;
  const expectedSecond = 'mdc-list';

  const actualFirst = listProps.children;
  const actualSecond = listProps.className;

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
});

test('List > Passes through additional props', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <List data-qa={DATA_QA}>{CHILDREN}</List>,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
