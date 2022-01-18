/* eslint-disable */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

// 封装异步请求数据 get 暂时先这样 根据业务需求封装
function fetchData(data) {
   return fetch(data.url,{
      method: 'post',
      headers: {
          'Content-Type': 'application/json;charset=utf-8;'
      },
      body: JSON.stringify(data.data)
   }).then(response => response.json()).then(json => json.data)
}

function* fetchUser(action) {
   try {
      const data = yield call(fetchData, {url:action.data.url,method:action.data.method,data:action.data.query});
      yield put({type: "ASYNC_GET_DATA", data});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeLatest("CHANGE_DEMO_ACTION", fetchUser);
}

export default mySaga;