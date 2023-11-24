import { ReactNode, useContext } from 'react'
import { RadioInputContainer } from './styles'
import { cartContext } from '../../../../context/CartContext'

interface RadioPaymentMethodProps {
  children: ReactNode
  value: string
}

export function RadioPaymentMethod({
  children,
  value,
}: RadioPaymentMethodProps) {
  const { changePaymentMethod, paymentMethod } = useContext(cartContext)

  return (
    <RadioInputContainer>
      <label htmlFor={value}>{children}</label>

      <input
        type="radio"
        id={value}
        value={value}
        checked={paymentMethod === value}
        onChange={() => changePaymentMethod(value)}
        name="paymentmethods"
      />
    </RadioInputContainer>
  )
}
