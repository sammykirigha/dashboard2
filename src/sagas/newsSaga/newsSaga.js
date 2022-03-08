import {put, call} from 'redux-saga/effects';
import { getLatestNewsFail, getLatestNewsSuccess } from '../../redux/newsActions';
import { getLatestNewsService } from '../../services/newsApi';

export function*getAllLatestNewsSaga(action){
    try{
      const news = yield call(getLatestNewsService);
      yield put(getLatestNewsSuccess(news))
    } catch(error){
       yield put(getLatestNewsFail('Failed to load news please try again....'))
    }
}