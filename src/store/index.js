import { createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import mainReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware()

sagaMiddleware.run()

const store = createStore(todoApp,applyMiddleware(sagaMiddleware))


export default store