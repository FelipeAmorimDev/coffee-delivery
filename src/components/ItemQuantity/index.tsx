import { Minus, Plus } from '@phosphor-icons/react'
import { ItemQuantityContainer } from './styles'

// import { IItemToAdd } from '../../pages/Home'

export interface ItemQuantityProps {
  quantity: number
  onAddCoffeeItem: () => void
  onRemoveCoffeeItem: () => void
}

export function ItemQuantity({
  quantity,
  onAddCoffeeItem,
  onRemoveCoffeeItem,
}: ItemQuantityProps) {
  function handleAddOneItemQuantity() {
    onAddCoffeeItem()
  }

  function handleRemoveOneItemQuantity() {
    onRemoveCoffeeItem()
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
