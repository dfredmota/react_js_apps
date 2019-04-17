import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './template/custom.css'
import { applyMiddleware,createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import TodoReducer from './todo/TodoReducer'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({

    todo: TodoReducer
})


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk,multi , promise)(createStore)(rootReducer, devTools)
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
