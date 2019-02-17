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
import TodoList from './src/components/todoList';
// Router
import { Router, Stack, Scene } from 'react-native-router-flux';
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './src/reducers/index';

const store = createStore(rootReducers);
console.log(store.getState());

const AppContainer = () =>  
    <Provider store={store}>
        <Router>
            <Stack key="root">
                <Scene key="weather" component={Weather} title="Weather" />
                <Scene key="main" component={Test} title="Home" initial={true} hideNavBar={true}/>
                <Scene key="todoList" component={TodoList} title="Todo List"/>
            </Stack>
        </Router>
    </Provider>

AppRegistry.registerComponent(appName, () => AppContainer);
