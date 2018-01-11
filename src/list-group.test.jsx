import { shallow } from 'enzyme';
import React from 'react';

import ListGroup from './list-group';

const CHILDREN = 'CHILDREN';

test('ListGroup > Renders the default classNames', () => {
  const wrapper = shallow(<ListGroup>{CHILDREN}</ListGroup>, { disableLifecycleMethods: true });
  const expected = 'mdc-list-group';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListGroup > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ListGroup className={CLASS_NAME}>{CHILDREN}</ListGroup>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-list-group ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ListGroup > Renders children as a child', () => {
  const wrapper = shallow(<ListGroup>{CHILDREN}</ListGroup>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
