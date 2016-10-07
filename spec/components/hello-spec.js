"use strict";

import React from 'react';
import Hello from '../../src/components/Hello.jsx';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';
import jsdomGlobal from 'jsdom-global';

jsdomGlobal();
chai.should();
chai.use(chaiEnzyme());

describe('<Hello />', () => {

  it('shows fruit names', () => {
    const wrapper = mount(<Hello fruit={['AAA', 'BBB']}/>);
    wrapper.should.contain.text('AAA');
    wrapper.should.contain.text('BBB');
  });

});
