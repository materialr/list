import { shallow } from 'enzyme';
import React from 'react';

import ListItemEndDetail from './list-item-end-detail';

const ICON = 'ICON';
const TITLE = 'TITLE';

test('ListItemEndDetail > Renders the default classNames', () => {
  const wrapper = shallow(
    <ListItemEndDetail icon={ICON} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'material-icons mdc-list-item__end-detail';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemEndDetail > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ListItemEndDetail className={CLASS_NAME} icon={ICON} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = `material-icons mdc-list-item__end-detail ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListItemEndDetail > Renders icon as a child', () => {
  const wrapper = shallow(
    <ListItemEndDetail icon={ICON} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = ICON;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});

test('ListItemEndDetail > Renders title as title and aria-label', () => {
  const wrapper = shallow(
    <ListItemEndDetail icon={ICON} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = TITLE;

  const actualFirst = wrapper.props()['aria-label'];
  const actualSecond = wrapper.props().title;

  expect(actualFirst).toBe(expected);
  expect(actualSecond).toBe(expected);
});
