import { combineReducers } from 'redux';
import dealListReducer, { DealListState } from '../app2/deal-list/dealListReducer';

export interface App2State {
  deals: DealListState
}

export default combineReducers<App2State>({
  deals: dealListReducer
});
