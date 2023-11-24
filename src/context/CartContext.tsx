import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { ICoffee, IOrder, cartReducer } from '../reducers/cart/reducer'
import {
  addCoffeeItemAction,
  addItemToCartAction,
  addItensToOrderListAction,
  removeCoffeeItemAction,
  removeItemInCartAction,
} from '../reducers/cart/actions'
import { useNavigate } from 'react-router-dom'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextData {
  cartList: ICoffee[]
  orderList: IOrder[]
  paymentMethod: string
  addItemToCart: (itemToAdd: ICoffee) => void
  addCoffeeItem: (id: string) => void
  removeCoffeeItem: (id: string) => void
  removeItemInCart: (id: string) => void
  addItensToOrderList: (order: IOrder) => void
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
  const navigate = useNavigate()

  function callbackNavegate(url: string) {
    navigate(url)
  }

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

  function addItensToOrderList(newOrder: IOrder) {
    dispatch(addItensToOrderListAction(newOrder, callbackNavegate))
  }

  function addItemToCart(itemToAdd: ICoffee) {
    dispatch(addItemToCartAction(itemToAdd))
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
        paymentMethod,
        changePaymentMethod,
        resetPaymentMethod,
      }}
    >
      {children}
    </cartContext.Provider>
  )
}
