import { createStore, combineReducers } from 'redux';
import selectedAvatar from '../reducers/avatarReducer.js';

export const finalReducer = combineReducers({
  selectedAvatar,
});

//const colonyStore = createStore(finalReducer);
const colonyStore = createStore(finalReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default colonyStore;