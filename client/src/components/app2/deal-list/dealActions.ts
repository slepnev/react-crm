import { Deal } from '../../../interfaces/dealInterface';

export const FETCH_ENTITIES = 'FETCH_ENTITIES';
export const FETCH_ENTITY = 'FETCH_ENTITY';
export const DELETE_ENTITY = 'DELETE_ENTITY';
export const CREATE_ENTITY = 'CREATE_ENTITY';

interface FetchEntitiesAction {
  type: typeof FETCH_ENTITIES
  payload: Deal[]
}

interface FetchEntityAction {
  type: typeof FETCH_ENTITY
  payload: Deal
}

interface DeleteEntityAction {
  type: typeof DELETE_ENTITY
  payload: string
}

interface CreateEntityAction {
  type: typeof CREATE_ENTITY
  payload: Deal
}

export function fetchEntitiesAction(entities: Deal[]): FetchEntitiesAction {
  return {
    type: FETCH_ENTITIES,
    payload: entities
  };
}

export function fetchEntityAction(entitiy: Deal): FetchEntityAction {
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

export function createEntityAction(entitiy: Deal): CreateEntityAction {
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
