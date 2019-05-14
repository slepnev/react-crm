import React from 'react';
import { shallow } from 'enzyme';
import DealList from './DealList';

it('renders welcome message enzyme', () => {
  const wrapper = shallow(<DealList />);
  // const deal = <span>Deal 1</span>;
  // expect(wrapper).toContainReact(deal);
});
