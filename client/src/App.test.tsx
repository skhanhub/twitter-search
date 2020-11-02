import React from 'react';
import { shallow } from "enzyme";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from "redux-thunk";
import App from './App';
import { initialState as getDataState } from './store/reducers/getData';
import { initialState as formControlState } from './store/reducers/formControl';

const buildStore = configureStore([thunk]);


describe("Tests for the App component", () => {
  let store;
  const initialState = {
    getData: getDataState,
    formControl: formControlState,
  }


  it("Should have the text Twitter Search", () => {
    store = buildStore(initialState);
    render(<Provider store={store}><App /></Provider>)
    const linkElement = screen.getByText(/Twitter Search/i);
    expect(linkElement).toBeInTheDocument();
  });
});