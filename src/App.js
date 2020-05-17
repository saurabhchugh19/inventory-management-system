import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./components/reducers";
import RenderRoutes from './components/router/render-routes';

const middlewares = [thunk];

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <RenderRoutes />
            </Router>
        </Provider>
    );
};

export default App;
