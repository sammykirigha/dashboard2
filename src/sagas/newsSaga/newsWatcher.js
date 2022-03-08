import { takeLatest } from 'redux-saga/effects';
import { LOAD_NEWS } from '../../redux/newsTypes';
import { getAllLatestNewsSaga } from './newsSaga';

export default function*watchNewsSaga(){
    yield takeLatest(LOAD_NEWS, getAllLatestNewsSaga)
}