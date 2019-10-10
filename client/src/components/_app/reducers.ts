import { combineReducers } from 'redux';
import dealReducer, { DealState } from '../app2/deal-list/dealReducer';

export interface State {
  deals: DealState
}

export default combineReducers<State>({
  deals: dealReducer
});
