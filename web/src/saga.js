import { put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";

const url = `http://localhost:5001/agromall-d819e/us-central1/api/admin`;

function* createItem(resource) {
  const { entity, data } = resource.data;
  yield console.log("Hello Sagas!", data, `${url}/${entity}`);
  yield axios.post(`${url}/${entity}`, data);
//   return
  yield put({ type: "CREATED", data: {entity, data} }); //TODO: would modify this part to pass response from server to reducer
}

function* createSaga() {
  yield takeEvery("CREATE", createItem);
}

export default function* appSaga() {
  yield all([createSaga()]);
}
