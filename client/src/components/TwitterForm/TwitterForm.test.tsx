import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import userEvent from '@testing-library/user-event'
import TwitterForm from './TwitterForm';
import { initialState as getDataState } from '../../store/reducers/getData';
import { initialState as formControlState } from '../../store/reducers/formControl';
import rootReducer from "../../store/reducers";
const initialState = {
  getData: getDataState,
  formControl: formControlState,
}
const store = () =>
  createStore(rootReducer, initialState, applyMiddleware(thunk));


describe("Tests for the TwitterForm component", () => {
  it("Should have value of food", () => {
    
    const {getByPlaceholderText} = render(<Provider store={store()}><TwitterForm /></Provider>)
    const searchInputEl = getByPlaceholderText("search");
    userEvent.type(searchInputEl, "food");

    expect(searchInputEl).toHaveValue('food');
  });
});