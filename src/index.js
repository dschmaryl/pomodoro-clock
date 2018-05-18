import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { reducers } from './reducers';
import { App } from './App';
import './index.css';

render(<App store={createStore(reducers)} />, document.getElementById('root'));
