import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Aside, CartButton, CartFeedback, HeaderContainer } from './styles'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { NavLink, useNavigate } from 'react-router-dom'

export function Header() {
  const { cartList } = useContext(cartContext)
  const qntItensInCart = cartList.filter((item) => item.quantity > 0)
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src="./logo.svg" alt="um copo de café roxo" />
      </NavLink>

      <Aside>
        <div>
          <MapPin weight="fill" color="#8047F8" size={22} className="teste" />
          <span>Porto Alegre, RS</span>
        </div>
        <CartButton onClick={() => navigate('cart')}>
          <ShoppingCart weight="fill" color="#C47F17" size={19} />
          {qntItensInCart.length > 0 ? (
            <CartFeedback>{qntItensInCart.length}</CartFeedback>
          ) : null}
        </CartButton>
      </Aside>
    </HeaderContainer>
  )
}
