/**
 * Tests for Component component
 *
 * Created by Tommy on 12/11/15.
 */

import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Component from '../../src/app/component/Component';

describe('Tests for Component component', () => {
  it('Render without error', () => {
    const component = ReactTestUtils.renderIntoDocument(<Component />);
    expect(component).to.exist;
  });
});
