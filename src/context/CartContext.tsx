import { ReactNode, createContext, useState } from 'react'

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
  zip: number
  address: string
  number: number
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: string
}

interface CartContextData {
  cartList: IItemToAdd[]
  orderList: IOrders[]
  addItemToCart: (itemToAdd: IItemToAdd) => void
  addCoffeeItem: (id: string) => void
  removeCoffeeItem: (id: string) => void
  removeItemInCart: (id: string) => void
  addItensToOrderList: (order: IOrders) => void
  cleanCartList: () => void
}

export const cartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartList, setCartList] = useState<IItemToAdd[]>([])
  const [orderList, setOrderList] = useState<IOrders[]>([])

  function addItensToOrderList(newOrder: IOrders) {
    setOrderList((previusState) => [...previusState, { ...newOrder }])
  }

  function addItemToCart(itemToAdd: IItemToAdd) {
    const itemExistInCart = cartList.find((item) => item.id === itemToAdd.id)
    setCartList((cartList) => {
      if (itemExistInCart) {
        const cartList2 = cartList.map((cart) => {
          if (cart.id === itemExistInCart.id) {
            return { ...cart, quantity: cart.quantity + itemToAdd.quantity }
          }
          return cart
        })

        return cartList2
      } else {
        return [...cartList, itemToAdd]
      }
    })
  }

  function cleanCartList() {
    setCartList([])
  }
  function removeItemInCart(id: string) {
    setCartList((cartList) => {
      return cartList.filter((cartItem) => cartItem.id !== id)
    })
  }

  function removeCoffeeItem(id: string) {
    setCartList((cartList) => {
      return cartList.map((cartItem) => {
        if (cartItem.id === id) {
          if (cartItem.quantity > 1) {
            return { ...cartItem, quantity: cartItem.quantity - 1 }
          } else {
            return cartItem
          }
        } else {
          return cartItem
        }
      })
    })
  }

  function addCoffeeItem(id: string) {
    setCartList((cartList) => {
      return cartList.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        } else {
          return cartItem
        }
      })
    })
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
      }}
    >
      {children}
    </cartContext.Provider>
  )
}
