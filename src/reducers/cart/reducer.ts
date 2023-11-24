import { IOrders } from '../../context/CartContext'
import { IItemToAdd } from '../../pages/Home'
import { ActionTypes } from './actions'

interface ICart {
  cartList: IItemToAdd[]
  orderList: IOrders[]
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: ICart, action: any) {
  if (action.type === ActionTypes.ADD_ITEM_TO_CART) {
    const itemExistInCart = state.cartList.find(
      (item) => item.id === action.payload.itemToAdd.id,
    )
    if (itemExistInCart) {
      const addOneToExistingItem = state.cartList.map((cart) => {
        if (cart.id === itemExistInCart.id) {
          return {
            ...cart,
            quantity: cart.quantity + action.payload.itemToAdd.quantity,
          }
        }
        return cart
      })

      return { ...state, cartList: [...addOneToExistingItem] }
    } else {
      return {
        ...state,
        cartList: [...state.cartList, action.payload.itemToAdd],
      }
    }
  }

  if (action.type === ActionTypes.CLEAR_CART_LIST) {
    return {
      ...state,
      cartList: [],
    }
  }

  if (action.type === ActionTypes.REMOVE_ITEM_IN_CART) {
    return {
      ...state,
      cartList: state.cartList.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      ),
    }
  }

  if (action.type === ActionTypes.DECREASE_ITEM_QUANTITY) {
    return {
      ...state,
      cartList: state.cartList.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (cartItem.quantity > 1) {
            return { ...cartItem, quantity: cartItem.quantity - 1 }
          } else {
            return cartItem
          }
        } else {
          return cartItem
        }
      }),
    }
  }

  if (action.type === ActionTypes.INCREASE_ITEM_QUANTITY) {
    return {
      ...state,
      cartList: state.cartList.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        } else {
          return cartItem
        }
      }),
    }
  }

  if (action.type === 'CHECKOUT') {
    return {
      ...state,
      orderList: [...state.orderList, { ...action.payload.newOrder }],
    }
  }

  return state
}
