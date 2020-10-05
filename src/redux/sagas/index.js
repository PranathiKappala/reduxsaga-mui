import { put, takeEvery, all,call } from 'redux-saga/effects'
// import './sagas.spec'
// import Api from './path/to/api'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))


export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  // while(true){
  yield takeEvery('INCREMENT_ASYNC',incrementAsync)
  //yield call(incrementAsync)
    // }
}
function* watchFetchUsers(){
  yield takeEvery('FETCH_USERS_REQUEST',fetchUsers)
}
export function* fetchUsers(){
  let users;
  yield  fetch('https://api.github.com/users')
  .then((response)=>users=response.json())
  .catch((e)=>console.log(e))
  yield users.then(res=>console.log(res))
  yield console.log('helo')
}
// const iterator = fetchUsers()
// console.log(iterator.next(),"ooooooo")
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once i.e parallely
export default function* rootSaga() {
  console.log('root saga')
  //to run sagas parallely
  yield all([
    watchFetchUsers(),
    watchIncrementAsync()
  ])
}
