"use strict";

import React from 'react';
import Hello from '../../src/components/Hello.jsx';
import chai from 'chai';
import chaiSpies from 'chai-spies';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';
import jsdomGlobal from 'jsdom-global';
import {Provider} from 'react-redux';

jsdomGlobal();
chai.should();
chai.use(chaiEnzyme());
chai.use(chaiSpies());

describe('<Hello />', () => {

  it('shows fruit names', () => {
    const mockStore = {
      dispatch: chai.spy(),
      getState: chai.spy(),
      subscribe: chai.spy()
    };

    const wrapper = mount(
      <Provider store={mockStore}>
        <Hello fruit={['AAA', 'BBB']}/>
      </Provider>
    );
    wrapper.should.contain.text('AAA');
    wrapper.should.contain.text('BBB');
  });

});
