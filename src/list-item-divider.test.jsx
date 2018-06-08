import { shallow } from 'enzyme';
import React from 'react';

import ListItemDivider from './list-item-divider';

test('ListItemDivider > Renders the default classNames', () => {
  const wrapper = shallow(<ListItemDivider />, { disableLifecycleMethods: true });
  const expected = 'mdc-list-divider';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemDivider > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ListItemDivider className={CLASS_NAME} inset />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-list-divider mdc-list-divider--inset ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemDivider > Passes through additional props', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <ListItemDivider data-qa={DATA_QA} />,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
