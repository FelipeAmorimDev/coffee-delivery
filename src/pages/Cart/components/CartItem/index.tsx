import { Trash } from '@phosphor-icons/react'
import { ItemQuantity } from '../../../../components/ItemQuantity'
import {
  CartItemHeader,
  CartItemHeaderContainer,
  CartItemSeparator,
} from '../../styles'
import { IItemToAdd } from '../../../Home'
import { useContext } from 'react'
import { cartContext } from '../../../../context/CartContext'

interface CartItemProps {
  coffee: IItemToAdd
}

export function CartItem({ coffee }: CartItemProps) {
  const { addCoffeeItem, removeCoffeeItem, removeItemInCart } =
    useContext(cartContext)
  return (
    <>
      {console.log(coffee)}
      <li>
        <CartItemHeader>
          <img src={coffee.image} alt="" />

          <CartItemHeaderContainer>
            <span>{coffee.title}</span>
            <div>
              <ItemQuantity
                quantity={coffee.quantity}
                onAddCoffeeItem={() => addCoffeeItem(coffee.id)}
                onRemoveCoffeeItem={() => removeCoffeeItem(coffee.id)}
              />
              <button onClick={() => removeItemInCart(coffee.id)}>
                <Trash size={16} />
                REMOVER
              </button>
            </div>
          </CartItemHeaderContainer>
        </CartItemHeader>
        <span>R$ {coffee.price}</span>
      </li>
      <CartItemSeparator />
    </>
  )
}
