import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../../components/Footer';

test('should render Footer correctly if current page is NOT addcontact', () => {
  const history = {
    location: {
      pathname: '/',
    }
  }
  const wrapper = shallow(<Footer history={history} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Footer correctly if current page IS addcontact', () => {
  const history = {
    location: {
      pathname: '/addcontact',
    }
  }
  const wrapper = shallow(<Footer history={history} />);
  expect(wrapper).toMatchSnapshot();
});
