import _ from 'lodash';
import { Deal } from '../../../interfaces/dealInterface';
import { CREATE_ENTITY, DELETE_ENTITY, EntityActionTypes, FETCH_ENTITIES, FETCH_ENTITY } from './dealActions';

export interface DealState {
  [key: string]: Deal
}

const INITIAL_STATE: DealState = {};

export default (state = INITIAL_STATE, action: EntityActionTypes): DealState => {
  switch (action.type) {
    case FETCH_ENTITIES:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_ENTITY:
      return {...state, [action.payload.id]: action.payload };
    case DELETE_ENTITY:
      return _.omit(state, action.payload);
    case CREATE_ENTITY:
      return {...state, [action.payload.id]: action.payload};
    default:
      return state;
  }
}
