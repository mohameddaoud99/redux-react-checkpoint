import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import Counter from './counter';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
