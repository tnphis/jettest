import {createStore, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'

import booksReducer from './reducers/booksReducer'

export default createStore(
	booksReducer,
	{},
	applyMiddleware(promise())
)
