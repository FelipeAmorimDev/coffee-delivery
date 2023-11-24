import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
import { FormLabel, InputsContainer, PaymentMethod } from '../../styles'
import { RadioPaymentMethod } from '../RadioPaymentMethod'
import { useFormContext } from 'react-hook-form'
import { formInputs } from './inputs'

export function CheckoutForm() {
  const { register } = useFormContext()

  return (
    <>
      <FormLabel>
        <MapPin size={22} color="#C47F17" />
        <div>
          <span>Endereço de Entrega</span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </FormLabel>
      <InputsContainer>
        {formInputs.map((formInput) => (
          <input
            key={formInput.id}
            {...formInput}
            {...register(formInput.id)}
          />
        ))}
      </InputsContainer>
      <FormLabel>
        <CurrencyDollar size={22} color="#8047F8" />
        <div>
          <span>Pagamento</span>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </FormLabel>
      <PaymentMethod>
        <RadioPaymentMethod value="Cartão de Credito">
          <CreditCard size={16} color="#8047F8" />
          CARTÃO DE CRÉDITO
        </RadioPaymentMethod>
        <RadioPaymentMethod value="Cartão de Debito">
          <Bank size={16} color="#8047F8" />
          CARTÃO DE DÉBITO
        </RadioPaymentMethod>
        <RadioPaymentMethod value="Dinheiro">
          <Money size={16} color="#8047F8" />
          DINHEIRO
        </RadioPaymentMethod>
      </PaymentMethod>
    </>
  )
}
