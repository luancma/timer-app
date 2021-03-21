import React from 'react';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/Routers';
import { Provider } from 'react-redux';
import { store } from './redux/storeConfig';

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* <PersistGate  persistor={persistor}> */}
        <Routers />
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  );
}
