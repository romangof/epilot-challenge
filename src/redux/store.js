import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import { changeDisplay } from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default createStore(changeDisplay, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);