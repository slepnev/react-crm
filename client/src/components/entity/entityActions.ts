import { Entity } from './entityInterface';

export const FETCH_ENTITIES = 'FETCH_ENTITIES';
export const FETCH_ENTITY = 'FETCH_ENTITY';
export const DELETE_ENTITY = 'DELETE_ENTITY';
export const CREATE_ENTITY = 'CREATE_ENTITY';

interface FetchEntitiesAction {
  type: typeof FETCH_ENTITIES
  payload: Entity[]
}

interface FetchEntityAction {
  type: typeof FETCH_ENTITY
  payload: Entity
}

interface DeleteEntityAction {
  type: typeof DELETE_ENTITY
  payload: string
}

interface CreateEntityAction {
  type: typeof CREATE_ENTITY
  payload: Entity
}

export function fetchEntitiesAction(entities: Entity[]): FetchEntitiesAction {
  return {
    type: FETCH_ENTITIES,
    payload: entities
  };
}

export function fetchEntityAction(entitiy: Entity): FetchEntityAction {
  return {
    type: FETCH_ENTITY,
    payload: entitiy
  };
}

export function deleteEntityAction(entitiyId: string): DeleteEntityAction {
  return {
    type: DELETE_ENTITY,
    payload: entitiyId
  };
}

export function createEntityAction(entitiy: Entity): CreateEntityAction {
  return {
    type: CREATE_ENTITY,
    payload: entitiy
  };
}

export const fetchEntities = () => async (dispatch: any) => {
  try {
    const response = await fetch('/api/v1/entities', {method: 'GET'})
      .then(result => result.json());
    dispatch(fetchEntitiesAction(response));
  } catch (e) {
    dispatch(fetchEntitiesAction([]));
    console.log(e);
  }
};

export type EntityActionTypes = FetchEntitiesAction | FetchEntityAction | DeleteEntityAction | CreateEntityAction;
