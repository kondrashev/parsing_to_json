import React from 'react';
import '../css/App.css';
import DeviceTree from './DeviceTree.jsx';
import { createStore } from 'redux';
import rootReducer from '../store/reducers';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer
);

const App = () => {
  return <Provider store={store}><DeviceTree /></Provider>;
}
export default App;