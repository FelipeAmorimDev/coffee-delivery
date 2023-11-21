import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'

export function Cart() {
  const { cartList } = useContext(cartContext)
  const JSONData = JSON.stringify(cartList, null, 2)
  return <p>{JSONData}</p>
}
