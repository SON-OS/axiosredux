import {createStore} from 'redux';
import rootReducer from './reduces/rootReduces';

export  const store = createStore(rootReducer);