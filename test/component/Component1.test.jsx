import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import assert from 'power-assert';
import Component1 from '../../src/app/component/Component1';

describe('Tests for Component component', () => {
  it('Render without error', () => {
    const component = ReactTestUtils.renderIntoDocument(<Component1 />);
    assert(component !== null);
  });
});
