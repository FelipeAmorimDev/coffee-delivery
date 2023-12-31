import { useContext, useState } from 'react'
import { ItemQuantity } from '../../../../components/ItemQuantity'
import { CoffeeTags, AddToCartOptions, AddToCartButton } from '../../styles'
import { cartContext } from '../../../../context/CartContext'
import { ShoppingCart } from '@phosphor-icons/react'

export interface CoffeeItemProps {
  coffe: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeItem({ coffe }: CoffeeItemProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItemToCart } = useContext(cartContext)

  function addCoffeeItem() {
    setQuantity((quantity) => quantity + 1)
  }

  function removeCoffeeItem() {
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
    setQuantity(1)
    addItemToCart(coffeeToAddInCart)
  }

  return (
    <li key={coffe.id}>
      <img src={coffe.image} alt="" />
      <CoffeeTags>
        {coffe.tags.map((tag) => (
          <span key={tag}>{tag.toUpperCase()}</span>
        ))}
      </CoffeeTags>

      <h3>{coffe.title}</h3>
      <p>{coffe.description}</p>

      <div>
        R$ <span>{coffe.price.toFixed(2)}</span>
        <AddToCartOptions>
          <ItemQuantity
            quantity={quantity}
            onAddCoffeeItem={addCoffeeItem}
            onRemoveCoffeeItem={removeCoffeeItem}
          />
          <AddToCartButton onClick={handleAddItemToCart}>
            <ShoppingCart weight="fill" color="#F3F2F2" size={22} />
          </AddToCartButton>
        </AddToCartOptions>
      </div>
    </li>
  )
}
