import { Trash } from '@phosphor-icons/react'
import { ItemQuantity } from '../../../../components/ItemQuantity'
import { CartItemSeparator } from '../../styles'
import { IItemToAdd } from '../../../Home'

interface CartItemProps {
  coffee: IItemToAdd
}

export function CartItem({ coffee }: CartItemProps) {
  return (
    <>
      {console.log(coffee)}
      <li>
        <img src={coffee.image} alt="" />
        <div>
          <span>{coffee.title}</span>
          <div>
            <ItemQuantity quantity={3} />
            <button>
              <Trash size={16} />
              REMOVER
            </button>
          </div>
        </div>
        <span>R$ {coffee.price}</span>
      </li>
      <CartItemSeparator />
    </>
  )
}
