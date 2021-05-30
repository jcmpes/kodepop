import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import DetailPage from './DetailPage';

const mockStore = configureMockStore()

describe('DetailPage', () => {
  it('should render', () => {
    // Mock store
    const data = [{ id: 1 }]
    const store = mockStore({
      ui: {
        loading: false
      },
      listings: {
        data
      }
    })

    // Mock of props
    const props = {
      setTitle: jest.fn(),
      value: {
        match: {
          params: {
            id: 1
          }
        },
        history: {}
      }
    }

    const render = () => shallow(
      <Provider store={store}>
        <DetailPage {...props} />
      </Provider>
    );

    const wrapper = render();
    expect(wrapper.exists()).toBe(true);
  })
})