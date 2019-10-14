import { combineReducers } from 'redux';
import dealReducer, { DealListState } from '../app2/deal-list/dealListReducer';

export interface State {
  deals: DealListState
}

export default combineReducers<State>({
  deals: dealReducer
});
