import { createStore } from 'redux';
import { changeDisplay } from './reducers';

export default createStore(changeDisplay);