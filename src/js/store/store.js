
/**
 * 所有的中间间在这里汇总注入store
 * @author lanyanan
 * @dateTime 2018-03-20
 */

import { createStore, applyMiddleware } from 'redux';
import Store from '../reducers/reducers';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../saga/saga';


const loggerMiddleware = createLogger();

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,loggerMiddleware, sagaMiddleware)(createStore);

const store = createStoreWithMiddleware(Store);

sagaMiddleware.run(mySaga)

export default store;