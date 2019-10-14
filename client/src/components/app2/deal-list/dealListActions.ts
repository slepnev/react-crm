import { DealItem } from '../../../interfaces/dealInterface';

export const FETCH_DEAL_LIST = 'FETCH_ENTITIES';
export const FETCH_ENTITY = 'FETCH_ENTITY';
export const DELETE_DEAL = 'DELETE_ENTITY';
export const CREATE_ENTITY = 'CREATE_ENTITY';

interface FetchEntitiesAction {
  type: typeof FETCH_DEAL_LIST
  payload: DealItem[]
}

interface FetchEntityAction {
  type: typeof FETCH_ENTITY
  payload: DealItem
}

interface DeleteDealAction {
  type: typeof DELETE_DEAL
  payload: string
}

interface CreateEntityAction {
  type: typeof CREATE_ENTITY
  payload: DealItem
}

export function fetchDealListAction(entities: DealItem[]): FetchEntitiesAction {
  return {
    type: FETCH_DEAL_LIST,
    payload: entities
  };
}

export function deleteDealAction(entitiyId: string): DeleteDealAction {
  return {
    type: DELETE_DEAL,
    payload: entitiyId
  };
}

export const fetchEntities = () => async (dispatch: any) => {
  try {
    const response = await fetch('/api/v1/deals', {method: 'GET'})
      .then(result => result.json());
    dispatch(fetchDealListAction(response));
  } catch (e) {
    dispatch(fetchDealListAction([]));
    console.log(e);
  }
};

export type DealsActionTypes = FetchEntitiesAction | FetchEntityAction | DeleteDealAction | CreateEntityAction;
