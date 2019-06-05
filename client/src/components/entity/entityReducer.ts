import _ from 'lodash';
import { Entity } from './entityInterface';
import { CREATE_ENTITY, DELETE_ENTITY, EntityActionTypes, FETCH_ENTITIES, FETCH_ENTITY } from './entityActions';

export interface EntityState {
  [key: string]: Entity
}

const INITIAL_STATE: EntityState = {};

export default (state = INITIAL_STATE, action: EntityActionTypes): EntityState => {
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
