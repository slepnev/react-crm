import * as React from 'react';
import { shallow } from 'enzyme';
import DealList from './DealList';

describe('DealList', () => {

  it('renders DealList enzyme', () => {
    shallow(<DealList />);
  });

});
