import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import { getRepositories } from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default createStore(getRepositories, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);