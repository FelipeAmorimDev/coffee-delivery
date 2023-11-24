import { IItemToAdd } from '../../pages/Home'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  CLEAR_CART_LIST = 'CLEAR_CART_LIST',
  REMOVE_ITEM_IN_CART = 'REMOVE_ITEM_IN_CART',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
}

export function addItemToCartAction(itemToAdd: IItemToAdd) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      itemToAdd,
    },
  }
}

export function cleanCartListAction() {
  return {
    type: ActionTypes.CLEAR_CART_LIST,
  }
}

export function removeItemInCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_IN_CART,
    payload: {
      id,
    },
  }
}

export function removeCoffeeItemAction(id: string) {
  return {
    type: ActionTypes.DECREASE_ITEM_QUANTITY,
    payload: {
      id,
    },
  }
}

export function addCoffeeItemAction(id: string) {
  return {
    type: ActionTypes.INCREASE_ITEM_QUANTITY,
    payload: {
      id,
    },
  }
}
