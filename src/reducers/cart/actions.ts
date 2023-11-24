import { ICoffee, IOrder } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_IN_CART = 'REMOVE_ITEM_IN_CART',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
  CHECKOUT = 'CHECKOUT',
}

export function addItemToCartAction(itemToAdd: ICoffee) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      itemToAdd,
    },
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

export function addItensToOrderListAction(
  newOrder: IOrder,
  callbackNavegate: (url: string) => void,
) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      newOrder,
      callbackNavegate,
    },
  }
}
