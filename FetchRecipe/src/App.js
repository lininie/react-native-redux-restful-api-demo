import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ),
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const App = () => (
    <Provider store={store}>
        <View>
            <Text>
                Hello
            </Text>
        </View>
    </Provider>
);
export default App;
