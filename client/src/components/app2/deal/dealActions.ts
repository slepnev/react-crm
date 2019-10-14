import { DealItem } from '../../../interfaces/dealInterface';

export const FETCH_DEALS = 'FETCH_ENTITIES';
export const FETCH_ENTITY = 'FETCH_ENTITY';
export const DELETE_DEAL = 'DELETE_ENTITY';
export const CREATE_ENTITY = 'CREATE_ENTITY';

interface FetchEntitiesAction {
  type: typeof FETCH_DEALS
  payload: DealItem[]
}

interface FetchEntityAction {
  type: typeof FETCH_ENTITY
  payload: DealItem
}

interface DeleteEntityAction {
  type: typeof DELETE_DEAL
  payload: string
}

interface CreateEntityAction {
  type: typeof CREATE_ENTITY
  payload: DealItem
}

export function fetchEntitiesAction(entities: DealItem[]): FetchEntitiesAction {
  return {
    type: FETCH_DEALS,
    payload: entities
  };
}

export function fetchEntityAction(entitiy: DealItem): FetchEntityAction {
  return {
    type: FETCH_ENTITY,
    payload: entitiy
  };
}

export function deleteEntityAction(entitiyId: string): DeleteEntityAction {
  return {
    type: DELETE_DEAL,
    payload: entitiyId
  };
}

export function createEntityAction(entitiy: DealItem): CreateEntityAction {
  return {
    type: CREATE_ENTITY,
    payload: entitiy
  };
}

export const fetchEntities = () => async (dispatch: any) => {
  try {
    const response = await fetch('/api/v1/deals', {method: 'GET'})
      .then(result => result.json());
    dispatch(fetchEntitiesAction(response));
  } catch (e) {
    dispatch(fetchEntitiesAction([]));
    console.log(e);
  }
};

export type DealsActionTypes = FetchEntitiesAction | FetchEntityAction | DeleteEntityAction | CreateEntityAction;
