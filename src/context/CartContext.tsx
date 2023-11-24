import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { cartReducer } from '../reducers/cart/reducer'
import {
  addCoffeeItemAction,
  addItemToCartAction,
  addItensToOrderListAction,
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

export interface IOrders {
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
  resetPaymentMethod: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const cartContext = createContext({} as CartContextData)

const paymentMethodDefault = 'Cartão de Credito'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    {
      cartList: [],
      orderList: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return { cartList: [], orderList: [] }
      }
    },
  )

  const [paymentMethod, setPaymentMethod] = useState(paymentMethodDefault)
  const { cartList, orderList } = cart

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cart])

  function changePaymentMethod(paymentMethod: string) {
    setPaymentMethod(paymentMethod)
  }

  function resetPaymentMethod() {
    setPaymentMethod(paymentMethodDefault)
  }

  function addItensToOrderList(newOrder: IOrders) {
    dispatch(addItensToOrderListAction(newOrder))
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
        resetPaymentMethod,
      }}
    >
      {children}
    </cartContext.Provider>
  )
}
