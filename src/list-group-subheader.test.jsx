import { shallow } from 'enzyme';
import React from 'react';

import ListGroupSubheader from './list-group-subheader';

const TITLE = 'TITLE';

test('ListGroupSubheader > Renders the default classNames', () => {
  const wrapper = shallow(<ListGroupSubheader title={TITLE} />, { disableLifecycleMethods: true });
  const expected = 'mdc-list-group__subheader';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListGroupSubheader > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ListGroupSubheader className={CLASS_NAME} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-list-group__subheader ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListGroupSubheader > Renders title as a child', () => {
  const wrapper = shallow(<ListGroupSubheader title={TITLE} />, { disableLifecycleMethods: true });
  const expected = TITLE;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});

test('ListGroupSubheader > Passes through additional props', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <ListGroupSubheader data-qa={DATA_QA} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
