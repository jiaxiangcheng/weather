/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import apiReducer from './src/reducers/apiDataReducer';

const store = createStore(apiReducer);

const AppContainer = () => 
    <Provider store={store}>
        <App/>
    </Provider>

AppRegistry.registerComponent(appName, () => App);
