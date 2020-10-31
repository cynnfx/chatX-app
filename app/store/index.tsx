import { systemReducer } from './system/reducer'
import { chatReducer } from './chat/reducer'
import { combineReducers } from 'redux'
import { createStore } from 'redux';

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
})

export type RootState = ReturnType<typeof rootReducer>

import rootReducer from '../reducers';


export default store = createStore(rootReducer);
