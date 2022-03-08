import { fork } from 'redux-saga/effects';
import watchNewsSaga from './newsSaga/newsWatcher';

export default function*rootSaga() {
    yield fork(watchNewsSaga)
}