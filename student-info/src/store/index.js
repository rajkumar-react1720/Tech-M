import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas/saga';
import reducers from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(sagaMiddleware)) 
)
sagaMiddleware.run(saga);

export default store;
