import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Welcome from './Welcome';
import { shallow } from 'enzyme';
import { render } from 'react-testing-library';

describe('Welcome', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Welcome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing enzyme', () => {
    shallow(<Welcome />);
  });

  it('renders welcome message enzyme', () => {
    const wrapper = shallow(<Welcome />);
    const welcome = <p>
      Edit <code>src/Welcome.js</code> and save to reload.
    </p>;
    expect(wrapper.contains(welcome)).toEqual(true);
    expect(wrapper).toContainReact(welcome);
  });

  it('renders welcome message react-testing-library', () => {
    const { getByText } = render(<Welcome />);
    expect(getByText('src/Welcome.js')).toBeInTheDocument();
  });

});
