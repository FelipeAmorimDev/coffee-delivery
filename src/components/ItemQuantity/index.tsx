import { Minus, Plus } from '@phosphor-icons/react'
import { ItemQuantityContainer } from './styles'

import { CoffeeItemProps } from '../../pages/Home/components/CoffeeItem'
// import { IItemToAdd } from '../../pages/Home'

export interface ItemQuantityProps extends CoffeeItemProps {
  quantity?: number
  onAddCoffeeItem: () => void
  OnRemoveCoffeeItem: () => void
}

export function ItemQuantity({
  quantity,
  onAddCoffeeItem,
  OnRemoveCoffeeItem,
}: ItemQuantityProps) {
  function handleAddOneItemQuantity() {
    onAddCoffeeItem()
  }

  function handleRemoveOneItemQuantity() {
    OnRemoveCoffeeItem()
  }

  return (
    <ItemQuantityContainer>
      <button onClick={handleRemoveOneItemQuantity}>
        <Minus weight="bold" color="#8047F8" size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={handleAddOneItemQuantity}>
        <Plus weight="bold" color="#8047F8" size={14} />
      </button>
    </ItemQuantityContainer>
  )
}
