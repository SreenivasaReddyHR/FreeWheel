import { all } from "redux-saga/effects";

import clockSagas from "./Clock/sagas";
import userDataSagas from "./UserData/sagas";
import servicesSagas from "./Services/sagas";
import searchSagas from "./Search/sagas";

function* rootSaga() {
  yield all([...clockSagas, ...userDataSagas, ...servicesSagas, ...searchSagas]);
}

export default rootSaga;
