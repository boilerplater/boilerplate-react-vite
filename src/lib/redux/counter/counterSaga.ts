import { put, takeEvery, all } from 'redux-saga/effects';

const delay = (ms: any) => new Promise(res => setTimeout(res, ms))

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* helloSaga() {
  // console.log('Hello Saga!')
}

export function* watchIncrementAsync() {
  // console.log('INCREMENT_ASYNC')
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
