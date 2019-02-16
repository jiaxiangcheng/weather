/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';

// Screens
import Weather from './src/components/weather';
import Test from './src/components/main';
// Router
import { Router, Stack, Scene } from 'react-native-router-flux';
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import apiReducer from './src/reducers/apiDataReducer';

const store = createStore(apiReducer);

const AppContainer = () =>  
    <Provider store={store}>
        <Router>
            <Stack key="root">
                <Scene key="weather" component={Weather} title="Weather" initial={true}/>
                <Scene key="home" component={Test} title="Home"/>
            </Stack>
        </Router>
    </Provider>

AppRegistry.registerComponent(appName, () => AppContainer);
