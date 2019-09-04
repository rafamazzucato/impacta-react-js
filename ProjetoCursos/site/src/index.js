import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));