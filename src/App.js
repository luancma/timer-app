import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/Routers';
import { store } from './redux/storeConfig';
import { GlobalStyle } from './styles/GlobalStyle';

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routers />
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  );
}
