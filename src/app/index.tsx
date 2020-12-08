import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Router from '~/Router';

import state from '~/state';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const App = () => (
  <SafeAreaView style={styles.root}>
    <Provider store={state.store}>
      <PersistGate loading={null} persistor={state.persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </SafeAreaView>
);

export default App;
