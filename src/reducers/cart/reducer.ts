import { IItemToAdd } from '../../pages/Home'
import { ActionTypes } from './actions'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: IItemToAdd[], action: any) {
  if (action.type === ActionTypes.ADD_ITEM_TO_CART) {
    const itemExistInCart = state.find(
      (item) => item.id === action.payload.itemToAdd.id,
    )
    if (itemExistInCart) {
      const addOneToExistingItem = state.map((cart) => {
        if (cart.id === itemExistInCart.id) {
          return {
            ...cart,
            quantity: cart.quantity + action.payload.itemToAdd.quantity,
          }
        }
        return cart
      })

      return addOneToExistingItem
    } else {
      return [...state, action.payload.itemToAdd]
    }
  }

  if (action.type === ActionTypes.CLEAR_CART_LIST) {
    return []
  }

  if (action.type === ActionTypes.REMOVE_ITEM_IN_CART) {
    return state.filter((cartItem) => cartItem.id !== action.payload.id)
  }

  if (action.type === ActionTypes.DECREASE_ITEM_QUANTITY) {
    return state.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        if (cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 }
        } else {
          return cartItem
        }
      } else {
        return cartItem
      }
    })
  }

  if (action.type === ActionTypes.INCREASE_ITEM_QUANTITY) {
    return state.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      } else {
        return cartItem
      }
    })
  }

  return state
}
