

import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './App/Redux/Store';
import Todos from './App/Screens/Todos';

function App() {
  return(
    <Provider store={store}>
      <Todos />
    </Provider>
  )
}

export default App;
