import _ from 'lodash';
import { DealItem } from '../../../interfaces/dealInterface';
import { CREATE_ENTITY, DELETE_DEAL, DealsActionTypes, FETCH_DEALS, FETCH_ENTITY } from './dealActions';

export interface DealsState {
  [key: string]: DealItem
}

const INITIAL_STATE: DealsState = {};

export default (state = INITIAL_STATE, action: DealsActionTypes): DealsState => {
  switch (action.type) {
    case FETCH_DEALS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case DELETE_DEAL:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
