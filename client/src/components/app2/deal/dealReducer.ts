import _ from 'lodash';
import { Deal } from '../../../interfaces/dealInterface';
import { DealsActionTypes, DELETE_DEAL, FETCH_DEALS } from './dealActions';

export interface DealsState {
  [key: string]: Deal
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
