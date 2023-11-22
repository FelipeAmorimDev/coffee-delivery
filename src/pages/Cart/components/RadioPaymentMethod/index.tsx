import React, { ReactNode } from 'react'
import { RadioInputContainer } from './styles'

interface RadioPaymentMethodProps {
  children: ReactNode
  value: string
  paymentMethod: string
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>
}

export function RadioPaymentMethod({
  children,
  value,
  paymentMethod,
  setPaymentMethod,
}: RadioPaymentMethodProps) {
  return (
    <RadioInputContainer>
      <label htmlFor={value}>{children}</label>
      <input
        type="radio"
        id={value}
        value={value}
        checked={paymentMethod === value}
        onChange={() => setPaymentMethod(value)}
      />
    </RadioInputContainer>
  )
}
