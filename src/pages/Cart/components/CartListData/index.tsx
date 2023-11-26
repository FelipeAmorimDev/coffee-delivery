import { useContext } from 'react'
import { CartList, PriceContainer } from '../../styles'
import { CartItem } from '../CartItem'
import { cartContext } from '../../../../context/CartContext'

const deliveryPrice = 10.5

export function CartListData() {
  const { cartList } = useContext(cartContext)

  const totalCartPrice = cartList.reduce(
    (acc, cartItem) => (acc += cartItem.price * cartItem.quantity),
    0,
  )

  return (
    <>
      {' '}
      <CartList>
        {cartList.map((cartItem) => {
          return <CartItem key={cartItem.id} coffee={cartItem} />
        })}
      </CartList>
      <PriceContainer>
        <p>
          Total de itens<span>R$ {totalCartPrice.toFixed(2)}</span>
        </p>
        <p>
          Entrega<span>R$ {deliveryPrice.toFixed(2)}</span>
        </p>
        <p>
          Total<span>R$ {(totalCartPrice + deliveryPrice).toFixed(2)}</span>
        </p>
      </PriceContainer>
      <button form="checkoutform" disabled={!cartList.length}>
        CONFIRMAR PEDIDO
      </button>
    </>
  )
}
