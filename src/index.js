import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from './routes/App';

const initialState = {
    favoriteGames: [],
    sectionActive: "Games",
};

const middlewares = [];
if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);