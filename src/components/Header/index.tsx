import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Aside, CartButton, CartFeedback, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src="./logo.svg" alt="um copo de café roxo" />
      <Aside>
        <div>
          <MapPin weight="fill" color="#8047F8" size={22} className="teste" />
          <span>Porto Alegre, RS</span>
        </div>
        <CartButton>
          <ShoppingCart weight="fill" color="#C47F17" size={19} />
          <CartFeedback>8</CartFeedback>
        </CartButton>
      </Aside>
    </HeaderContainer>
  )
}
