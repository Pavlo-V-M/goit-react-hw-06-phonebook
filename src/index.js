import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './components/store/store';
import App from './components/App';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  rootElement
);


// index.js

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './components/store/store';
// import { App } from './components/App';
// import './index.css';

// const rootElement = document.getElementById('root');

// ReactDOM.createRoot(rootElement).render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </PersistGate>
//   </Provider>
// );

