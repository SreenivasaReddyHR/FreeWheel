import { combineReducers } from "redux";

import clockReducer from "./Clock/reducer";
import counterReducer from "./Counter/reducer";
import userDataReducer from "./UserData/reducer";
import servicesReducer from './Services/reducer'
import searchReducer from './Search/reducer'

const rootReducer = combineReducers({
  clock: clockReducer,
  counter: counterReducer,
  userData: userDataReducer,
  services: servicesReducer,
  search: searchReducer
});

export default rootReducer;
