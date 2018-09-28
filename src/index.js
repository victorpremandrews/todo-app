import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { rootReducer } from './reducer/index';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();


store.subscribe(() => console.log(store.getState()));
