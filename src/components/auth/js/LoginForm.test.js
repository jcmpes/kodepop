import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const props = {
    onSubmit: jest.fn(),
    loading: false,
    credentials: { email: 'JC', password: 'password' },
    setCredentials: jest.fn(),
    remember: false,
    setRemember: jest.fn()
  }

  const render = () => shallow(<LoginForm {...props} />);

  it('should render', () => {
    const wrapper = render();
    expect(wrapper.exists()).toBe(true);
  })

  it('should submit credentials and remember', () => {
    const wrapper = render();
    const emailField = wrapper.find('.login-form-field').at(0)
    emailField
      .props()
      .onChange({ target: { name: 'email', value: props.credentials.email } })
    const passwordField = wrapper.find('.login-form-field').at(1)
    passwordField
      .props()
      .onChange({ target: { name: 'password', value: props.credentials.password } })
    const rememberCheckbox = wrapper.find('#remember')
    rememberCheckbox
      .props()
      .onChange({ target: { name: 'remember', value: props.remember } })
    const form = wrapper.find('.login-form');
    form.simulate('submit', { preventDefault: () => {} });

    expect(props.onSubmit).toHaveBeenCalledWith(props.credentials, props.remember)
  })

})