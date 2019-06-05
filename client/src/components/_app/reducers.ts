import { combineReducers } from 'redux';
import entityReducer, { EntityState } from '../entity/entityReducer';

export interface State {
  entities: EntityState
}

export default combineReducers<State>({
  entities: entityReducer
});
