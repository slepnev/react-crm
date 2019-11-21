import * as React from 'react';
import { shallow } from 'enzyme';
import DealForm from './DealForm';

describe('DealForm', () => {

  it('renders DealForm enzyme', () => {
    shallow(<DealForm />);
  });

});
