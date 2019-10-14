import _ from 'lodash';
import { DealItem } from '../../../interfaces/dealInterface';
import { CREATE_ENTITY, DELETE_DEAL, DealsActionTypes, FETCH_DEAL_LIST, FETCH_ENTITY } from './dealListActions';

export interface DealListState {
  [key: string]: DealItem
}

const INITIAL_STATE: DealListState = {};

export default (state = INITIAL_STATE, action: DealsActionTypes): DealListState => {
  switch (action.type) {
    case FETCH_DEAL_LIST:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case DELETE_DEAL:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
