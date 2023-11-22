import React, { ReactNode } from 'react'
import { RadioInputContainer } from './styles'
import { useFormContext } from 'react-hook-form'

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
  const { register } = useFormContext()
  return (
    <RadioInputContainer>
      <label htmlFor={value}>{children}</label>
      <input
        {...register('paymentMethod')}
        type="radio"
        id={value}
        value={value}
        checked={paymentMethod === value}
        onChange={() => setPaymentMethod(value)}
        name="paymentmethods"
      />
    </RadioInputContainer>
  )
}
