import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface ICoffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: string
  image: string
  quantity: number
}

export interface IOrder {
  id: number
  zip: string
  address: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: string
}

interface ICart {
  cartList: ICoffee[]
  orderList: IOrder[]
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: ICart, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      return produce(state, (draft) => {
        const itemExistInCart = draft.cartList.find(
          (item) => item.id === action.payload.itemToAdd.id,
        )

        if (itemExistInCart) {
          itemExistInCart.quantity += action.payload.itemToAdd.quantity
        } else {
          draft.cartList.push(action.payload.itemToAdd)
        }
      })
    }

    case ActionTypes.CLEAR_CART_LIST:
      return produce(state, (draft) => {
        draft.cartList.splice(0)
      })

    case ActionTypes.REMOVE_ITEM_IN_CART:
      return produce(state, (draft) => {
        const coffeeItem = draft.cartList.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )
        draft.cartList.splice(coffeeItem, 1)
      })

    case ActionTypes.DECREASE_ITEM_QUANTITY: {
      return produce(state, (draft) => {
        const coffeeItem = draft.cartList.find(
          (coffee) => coffee.id === action.payload.id,
        )
        if (coffeeItem) {
          const quantity = coffeeItem.quantity
          coffeeItem.quantity = quantity > 1 ? quantity - 1 : quantity
        }
      })
    }

    case ActionTypes.INCREASE_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const coffeeItem = draft.cartList.find(
          (coffee) => coffee.id === action.payload.id,
        )
        if (coffeeItem) {
          coffeeItem.quantity = coffeeItem.quantity + 1
        }
      })

    case ActionTypes.CHECKOUT:
      return produce(state, (draft) => {
        draft.orderList.push(action.payload.newOrder)
      })

    default:
      return state
  }
}
