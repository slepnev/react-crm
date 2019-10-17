import { DealItem } from '../../../interfaces/dealInterface';

export const FETCH_DEAL_LIST = '[app2] FETCH_DEAL_LIST';
export const DELETE_DEAL_ITEM = '[app2] DELETE_DEAL_ITEM';

interface FetchDealListAction {
  type: typeof FETCH_DEAL_LIST
  payload: DealItem[]
}

interface DeleteDealItemAction {
  type: typeof DELETE_DEAL_ITEM
  payload: string
}

export function fetchDealListAction(entities: DealItem[]): FetchDealListAction {
  return {
    type: FETCH_DEAL_LIST,
    payload: entities
  };
}

export function deleteDealItemAction(id: string): DeleteDealItemAction {
  return {
    type: DELETE_DEAL_ITEM,
    payload: id
  };
}

export const fetchDealList = () => async (dispatch: any) => {
  try {
    const response = await fetch('/api/v1/deals', {method: 'GET'})
      .then(result => result.json());
    dispatch(fetchDealListAction(response));
  } catch (e) {
    dispatch(fetchDealListAction([]));
    console.log(e);
  }
};

export type DealsActionTypes = FetchDealListAction | DeleteDealItemAction;
