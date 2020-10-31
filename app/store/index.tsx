import { combineReducers, createStore } from 'redux';
import { systemReducer } from './system/reducer';
import { chatReducer } from './chat/reducer';

import rootReducer from '../reducers';

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store = createStore(rootReducer);
