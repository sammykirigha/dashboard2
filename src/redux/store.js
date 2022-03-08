import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { fetchLatestNews } from './newsReducer';


export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        combineReducers({
          news: fetchLatestNews
        }),
        composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
    );

    sagaMiddleware.run(rootSaga);
    return store;
}

