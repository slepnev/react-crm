import { combineReducers } from 'redux';
import app2Reducer, { App2State } from '../app2/reducers';

export interface State {
  app2: App2State
}

export default combineReducers<State>({
  app2: app2Reducer
});
