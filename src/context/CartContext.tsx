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
  quantity?: number
}

interface CartContextData {
  cartList: IItemToAdd[]
  addItemToCart: (itemToAdd: IItemToAdd) => void
}

export const cartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartList, setCartList] = useState<IItemToAdd[]>([])

  function addItemToCart(itemToAdd: IItemToAdd) {
    const itemExistInCart = cartList.find((item) => item.id === itemToAdd.id)
    setCartList((cartList) => {
      if (itemExistInCart) {
        const cartList2 = cartList.map((cart) => {
          if (cart.id === itemExistInCart.id) {
            return { ...cart, quantity: itemToAdd.quantity }
          }
          return cart
        })

        return cartList2
      } else {
        return [...cartList, itemToAdd]
      }
    })
  }
  return (
    <cartContext.Provider value={{ addItemToCart, cartList }}>
      {children}
    </cartContext.Provider>
  )
}
