import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Header from './common/Header';
import NTCalculator from './NTCalculator';
import Reducers from '../reducers/index';

class App extends Component {
    render() {
        return (
                <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
                <View style={{ flex: 1 }} >
                <Header>
                    NTCalc
                </Header>
                <ScrollView >
                    <NTCalculator />
                </ScrollView>
                </View>
                </Provider>
        );
    }
}

export default App;
