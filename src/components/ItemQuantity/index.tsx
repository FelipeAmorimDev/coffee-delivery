import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { ItemQuantityContainer } from './styles'
import { useContext, useState } from 'react'
import { AddToCartButton } from '../../pages/Home/styles'
import { cartContext } from '../../context/CartContext'
// import { IItemToAdd } from '../../pages/Home'

interface ItemQuantityProps {
  coffe: {
    id: string
    title: string
    description: string
    tags: string[]
    price: string
    image: string
  }
  // onAddItemToCart: (itemToAdd: IItemToAdd) => void
}

export function ItemQuantity({ coffe }: ItemQuantityProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItemToCart } = useContext(cartContext)

  function handleAddOneItemQuantity() {
    setQuantity((quantity) => quantity + 1)
  }

  function handleRemoveOneItemQuantity() {
    setQuantity((quantity) => {
      if (quantity === 1) {
        return quantity
      } else {
        return quantity - 1
      }
    })
  }

  function handleAddItemToCart() {
    const coffeeToAddInCart = { ...coffe, quantity }
    addItemToCart(coffeeToAddInCart)
  }

  return (
    <>
      <ItemQuantityContainer>
        <button onClick={handleRemoveOneItemQuantity}>
          <Minus weight="bold" color="#8047F8" size={14} />
        </button>
        <span>{quantity}</span>
        <button onClick={handleAddOneItemQuantity}>
          <Plus weight="bold" color="#8047F8" size={14} />
        </button>
      </ItemQuantityContainer>

      <AddToCartButton onClick={handleAddItemToCart}>
        <ShoppingCart weight="fill" color="#F3F2F2" size={22} />
      </AddToCartButton>
    </>
  )
}
