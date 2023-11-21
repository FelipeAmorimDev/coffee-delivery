import { Minus, Plus } from '@phosphor-icons/react'
import { ItemQuantityContainer } from './styles'

export function ItemQuantity() {
  return (
    <ItemQuantityContainer>
      <button>
        <Minus weight="bold" color="#8047F8" size={14} />
      </button>
      <span>0</span>
      <button>
        <Plus weight="bold" color="#8047F8" size={14} />
      </button>
    </ItemQuantityContainer>
  )
}
