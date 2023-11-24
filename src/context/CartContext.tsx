import { ReactNode, createContext, useReducer, useState } from 'react'
import { cartReducer } from '../reducers/cart/reducer'
import {
  addCoffeeItemAction,
  addItemToCartAction,
  cleanCartListAction,
  removeCoffeeItemAction,
  removeItemInCartAction,
} from '../reducers/cart/actions'

interface CartContextProviderProps {
  children: ReactNode
}

interface IItemToAdd {
  id: string
  title: string
  description: string
  tags: string[]
  price: string
  image: string
  quantity: number
}

interface IOrders {
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

interface CartContextData {
  cartList: IItemToAdd[]
  orderList: IOrders[]
  paymentMethod: string
  addItemToCart: (itemToAdd: IItemToAdd) => void
  addCoffeeItem: (id: string) => void
  removeCoffeeItem: (id: string) => void
  removeItemInCart: (id: string) => void
  addItensToOrderList: (order: IOrders) => void
  cleanCartList: () => void
  changePaymentMethod: (paymentMethod: string) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const cartContext = createContext({} as CartContextData)
// useState<IItemToAdd[]>([])
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartList, dispatch] = useReducer(cartReducer, [])
  const [orderList, setOrderList] = useState<IOrders[]>([])
  const [paymentMethod, setPaymentMethod] = useState('Cartão de Credito')

  function addItensToOrderList(newOrder: IOrders) {
    setOrderList((previusState) => [...previusState, { ...newOrder }])
  }

  function changePaymentMethod(paymentMethod: string) {
    setPaymentMethod(paymentMethod)
  }

  function addItemToCart(itemToAdd: IItemToAdd) {
    dispatch(addItemToCartAction(itemToAdd))
  }

  function cleanCartList() {
    dispatch(cleanCartListAction())
  }

  function removeItemInCart(id: string) {
    dispatch(removeItemInCartAction(id))
  }

  function removeCoffeeItem(id: string) {
    dispatch(removeCoffeeItemAction(id))
  }

  function addCoffeeItem(id: string) {
    dispatch(addCoffeeItemAction(id))
  }

  return (
    <cartContext.Provider
      value={{
        addItemToCart,
        cartList,
        addCoffeeItem,
        removeCoffeeItem,
        removeItemInCart,
        addItensToOrderList,
        orderList,
        cleanCartList,
        paymentMethod,
        changePaymentMethod,
      }}
    >
      {children}
    </cartContext.Provider>
  )
}
